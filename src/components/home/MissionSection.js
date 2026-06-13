import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { missionSection } from "@/data/siteContent";

export default function MissionSection() {
  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src={missionSection.featuredImage}
              alt={missionSection.featuredImageAlt}
              width={1200}
              height={800}
              className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rlcc-green">
              {missionSection.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
              {missionSection.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-rlcc-text-muted sm:text-lg">
              {missionSection.description}
            </p>
            <p className="mt-4 text-base leading-7 text-rlcc-text-main">
              {missionSection.supportingText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/communities">Join Us</PrimaryButton>
              <PrimaryButton href="/contact" variant="outline">
                Talk with a Pastor
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
