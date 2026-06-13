import { givingPageContent } from "@/data/siteContent";

export default function GivingScriptureSection() {
  const { scripture } = givingPageContent;

  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <blockquote className="text-xl leading-9 text-rlcc-green-dark italic sm:text-2xl sm:leading-10">
          &quot;{scripture.quote}&quot;
        </blockquote>
        <p className="mt-6 text-base font-semibold text-rlcc-text-muted">— {scripture.reference}</p>
      </div>
    </section>
  );
}
