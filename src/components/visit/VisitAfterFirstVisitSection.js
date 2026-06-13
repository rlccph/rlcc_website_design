import PrimaryButton from "@/components/ui/PrimaryButton";
import { visitPageContent } from "@/data/siteContent";

export default function VisitAfterFirstVisitSection() {
  const { afterVisit } = visitPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{afterVisit.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{afterVisit.description}</p>
          <PrimaryButton href={afterVisit.buttonHref} variant="outline" className="mt-8">
            {afterVisit.buttonLabel}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
