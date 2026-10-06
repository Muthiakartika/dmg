import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

import { fadeUp, staggerDelay } from "@/lib/aos";

export interface ProcessStep {
  image: string | StaticImageData;
  title: string;
  text: string;
  /** Alt text for the step photo; defaults to "image". */
  imageAlt?: string;
}

interface ProcessStepsProps {
  title: ReactNode;
  steps: readonly ProcessStep[];
}

/** Numbered four-card "how we work" row. */
export default function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <div className="process-area pt-100 pb-75">
      <div className="container">
        <div className="section-title d-flex justify-content-center" {...fadeUp(100)}>
          <h2>{title}</h2>
        </div>

        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div className="col-xl-3 col-sm-6" {...fadeUp(staggerDelay(index))} key={index}>
              <div className="process-card">
                <div className="process-image">
                  <Image
                    src={step.image}
                    alt={step.imageAlt ?? "image"}
                    width={540}
                    height={310}
                  />
                  <span>{index + 1}</span>
                </div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
