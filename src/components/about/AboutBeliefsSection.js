import { aboutPageContent } from "@/data/siteContent";

export default function AboutBeliefsSection() {
  const { beliefs } = aboutPageContent;

  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{beliefs.title}</h2>
        <p className="mt-5 text-base leading-7 text-rlcc-text-muted sm:text-lg">{beliefs.body}</p>
        <blockquote className="mt-10 text-xl leading-9 text-rlcc-green-dark italic sm:text-2xl sm:leading-10">
          &quot;{beliefs.scripture.quote}&quot;
        </blockquote>
        <p className="mt-6 text-base font-semibold text-rlcc-text-muted">
          — {beliefs.scripture.reference}
        </p>
      </div>
    </section>
  );
}
