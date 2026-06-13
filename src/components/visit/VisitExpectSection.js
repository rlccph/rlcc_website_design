import { visitPageContent } from "@/data/siteContent";

export default function VisitExpectSection() {
  const { expect } = visitPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{expect.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{expect.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <ul className="space-y-4">
            {expect.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-base leading-7 text-rlcc-text-main">
                <span className="h-2 w-2 shrink-0 rounded-full bg-rlcc-green" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
