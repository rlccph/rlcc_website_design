import { aboutPageContent } from "@/data/siteContent";

export default function AboutMissionVisionSection() {
  const { missionVision } = aboutPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-rlcc-green sm:text-2xl">
              {missionVision.mission.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">
              {missionVision.mission.body}
            </p>
          </article>
          <article className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-rlcc-green sm:text-2xl">
              {missionVision.vision.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">
              {missionVision.vision.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
