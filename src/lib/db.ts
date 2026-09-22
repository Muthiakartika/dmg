import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let sqlClient: NeonQueryFunction<false, false> | undefined;

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is not configured. Add your Neon connection string to .env.local.",
    );
  }

  if (!sqlClient) {
    // The Neon HTTP driver sends every query through `fetch`, and Next.js
    // stores fetch responses in its Data Cache — indefinitely, since these
    // carry no revalidate hint. A `force-dynamic` page then re-renders on
    // each request but replays a frozen SQL response, so a post published
    // from /admin never appears on /blogs. `no-store` keeps queries out of
    // that cache; every route that reads the database is already dynamic,
    // so no statically rendered page is affected.
    sqlClient = neon(databaseUrl, { fetchOptions: { cache: "no-store" } });
  }

  return sqlClient;
}
