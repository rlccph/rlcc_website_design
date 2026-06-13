import { Book, GraphUpArrow, MusicNoteBeamed, PeopleFill } from "react-bootstrap-icons";
import { aboutPageContent } from "@/data/siteContent";

const iconClassName = "h-6 w-6 text-rlcc-green";

const experienceIcons = {
  worship: () => <MusicNoteBeamed className={iconClassName} aria-hidden="true" />,
  teaching: () => <Book className={iconClassName} aria-hidden="true" />,
  community: () => <PeopleFill className={iconClassName} aria-hidden="true" />,
  growth: () => <GraphUpArrow className={iconClassName} aria-hidden="true" />,
};

export default function AboutExperienceSection() {
  const { experience } = aboutPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          {experience.title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experience.items.map((item) => {
            const Icon = experienceIcons[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rlcc-cream">
                  <Icon />
                </div>
                <h3 className="mt-4 text-base font-bold leading-6 text-rlcc-text-main sm:text-lg">
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
