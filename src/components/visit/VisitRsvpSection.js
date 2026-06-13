import PrimaryButton from "@/components/ui/PrimaryButton";
import { visitPageContent } from "@/data/siteContent";

export default function VisitRsvpSection() {
  const { rsvp } = visitPageContent;

  return (
    <section id="rsvp" className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{rsvp.title}</h2>
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{rsvp.description}</p>
            <PrimaryButton href={rsvp.buttonHref} className="mt-8">
              {rsvp.buttonLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
