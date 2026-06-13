import PrimaryButton from "@/components/ui/PrimaryButton";
import { aboutPageContent } from "@/data/siteContent";

export default function AboutCtaBannerSection() {
  const { cta } = aboutPageContent;

  return (
    <section className="bg-rlcc-surface pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-rlcc-green-dark p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{cta.title}</h2>
              <p className="mt-3 text-base leading-7 text-white/90">{cta.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href={cta.primaryHref}>{cta.primaryLabel}</PrimaryButton>
              <PrimaryButton href={cta.secondaryHref} variant="outlineLight">
                {cta.secondaryLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
