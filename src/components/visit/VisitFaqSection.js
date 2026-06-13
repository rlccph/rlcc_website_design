import { visitPageContent } from "@/data/siteContent";

export default function VisitFaqSection() {
  const { faq } = visitPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{faq.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">
            Answers to common first-time questions so you can visit with confidence.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faq.items.map((item) => (
            <details key={item.question} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-rlcc-text-main">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-rlcc-text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
