import PrimaryButton from "@/components/ui/PrimaryButton";
import { contactPageContent } from "@/data/siteContent";

export default function ContactPastorSection() {
  const { talkToPastor } = contactPageContent;

  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{talkToPastor.title}</h2>
        <p className="mt-4 text-base leading-7 text-rlcc-text-muted sm:text-lg">
          {talkToPastor.subtitle}
        </p>
        <PrimaryButton href={talkToPastor.ctaHref} className="mt-8">
          {talkToPastor.ctaLabel}
        </PrimaryButton>
      </div>
    </section>
  );
}
