import Image from "next/image";

interface TeamMember {
  image: string;
  name: string;
  designation: string;
  socialLinks: { icon: string; link: string }[];
}

const socialIcons = (facebook: string, instagram: string, twitter: string) => [
  { icon: "ri-facebook-line", link: facebook },
  { icon: "ri-instagram-line", link: instagram },
  { icon: "ri-twitter-line", link: twitter },
];

const genericSocials = socialIcons(
  "https://www.facebook.com/",
  "https://www.instagram.com/",
  "https://www.twitter.com/",
);

const teamMembers: TeamMember[] = [
  {
    image: "/images/team/team1.jpg",
    name: "David Off",
    designation: "CEO & Co-founder",
    // All three icons of the lead card point at facebook.com.
    socialLinks: socialIcons(
      "https://www.facebook.com/",
      "https://www.facebook.com/",
      "https://www.facebook.com/",
    ),
  },
  {
    image: "/images/team/team2.jpg",
    name: "Victor James",
    designation: "Architect",
    socialLinks: genericSocials,
  },
  {
    image: "/images/team/team3.jpg",
    name: "Walter White",
    designation: "Interior Designer",
    socialLinks: genericSocials,
  },
  {
    image: "/images/team/team4.jpg",
    name: "Jonathon",
    designation: "Exterior Designer",
    socialLinks: genericSocials,
  },
  {
    image: "/images/team/team5.jpg",
    name: "Angela",
    designation: "Marketing Lead",
    socialLinks: genericSocials,
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-card">
      <div className="team-image">
        <Image src={member.image} alt="team" width={790} height={790} />

        <div className="content">
          <h3>{member.name}</h3>
          <span>{member.designation}</span>
        </div>
      </div>

      <ul className="team-social">
        {member.socialLinks.map((social, index) => (
          <li key={index}>
            <a href={social.link} target="_blank">
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Lead member on the left, four more in a 2×2 grid on the right. */
export default function TeamSection() {
  const [lead, ...others] = teamMembers;

  return (
    <div className="team-area different-wrap-color">
      <div className="container">
        <div className="row justify-content-center align-items-end">
          <div className="col-lg-5 col-md-12">
            <div className="team-left-content">
              <div className="title">
                <span>OUR TEAM</span>
                <h2>Our Expert Team Behind The Scene</h2>
              </div>

              <TeamCard member={lead} />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="team-right-content">
              <div className="row justify-content-center">
                {others.map((member) => (
                  <div className="col-lg-6 col-md-6" key={member.name}>
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
