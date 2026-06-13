import { givingPageContent } from "@/data/siteContent";

export default function GivingDesignationsSection() {
  const { designations } = givingPageContent;

  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{designations.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{designations.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {designations.items.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-black/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-rlcc-text-main">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rlcc-text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-rlcc-text-main">
          {designations.instruction}
        </p>
      </div>
    </section>
  );
}
