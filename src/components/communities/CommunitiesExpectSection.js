import { communitiesPageContent } from "@/data/siteContent";

export default function CommunitiesExpectSection() {
  const { howToJoin } = communitiesPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{howToJoin.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{howToJoin.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {howToJoin.steps.map((step) => (
            <article
              key={step.number}
              className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-rlcc-green text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-bold text-rlcc-text-main">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rlcc-text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
