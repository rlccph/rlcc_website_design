import { HeartFill, MusicNoteBeamed, PersonFill } from "react-bootstrap-icons";
import { givingPageContent } from "@/data/siteContent";

const iconClassName = "h-6 w-6 text-rlcc-green";

const impactIcons = {
  worship: () => <MusicNoteBeamed className={iconClassName} aria-hidden="true" />,
  discipleship: () => <PersonFill className={iconClassName} aria-hidden="true" />,
  outreach: () => <HeartFill className={iconClassName} aria-hidden="true" />,
};

export default function GivingWhySection() {
  const { whyWeGive } = givingPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{whyWeGive.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted sm:text-lg">{whyWeGive.body}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whyWeGive.impacts.map((impact) => {
            const Icon = impactIcons[impact.icon];

            return (
              <article
                key={impact.title}
                className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rlcc-cream">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-rlcc-text-main">{impact.title}</h3>
                <p className="mt-2 text-sm leading-6 text-rlcc-text-muted">{impact.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
