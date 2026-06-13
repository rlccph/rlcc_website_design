import PrimaryButton from "@/components/ui/PrimaryButton";
import { visitPageContent } from "@/data/siteContent";

export default function VisitCtaBannerSection() {
  const { cta } = visitPageContent;

  return (
    <section className="bg-rlcc-surface pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-rlcc-green-dark p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">{cta.title}</p>
            <PrimaryButton href={cta.buttonHref}>{cta.buttonLabel}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
