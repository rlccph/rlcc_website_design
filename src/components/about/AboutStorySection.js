import Image from "next/image";
import { aboutPageContent } from "@/data/siteContent";

export default function AboutStorySection() {
  const { story } = aboutPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{story.title}</h2>
            <p className="mt-5 text-base leading-7 text-rlcc-text-muted sm:text-lg">{story.body}</p>
            <ol className="mt-8 space-y-6 border-l-2 border-rlcc-green pl-6">
              {story.milestones.map((milestone) => (
                <li key={milestone.year} className="relative">
                  <span
                    className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-rlcc-green"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-rlcc-green">
                    {milestone.year}
                  </p>
                  <p className="mt-1 text-base leading-7 text-rlcc-text-main">{milestone.label}</p>
                </li>
              ))}
            </ol>
          </div>
          <Image
            src={story.image}
            alt={story.imageAlt}
            width={900}
            height={560}
            className="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96 lg:sticky lg:top-28"
          />
        </div>
      </div>
    </section>
  );
}
