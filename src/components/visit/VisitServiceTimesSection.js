import PrimaryButton from "@/components/ui/PrimaryButton";
import { visitPageContent } from "@/data/siteContent";

export default function VisitServiceTimesSection() {
  const { serviceTimes } = visitPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{serviceTimes.title}</h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{serviceTimes.subtitle}</p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3">
          {serviceTimes.glanceNotes.map((note) => (
            <p key={note} className="flex items-center gap-2 text-sm text-rlcc-text-main sm:text-base">
              <span className="h-2 w-2 shrink-0 rounded-full bg-rlcc-green" aria-hidden="true" />
              {note}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-white p-6 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">Onsite</p>
            <h3 className="mt-2 text-2xl font-bold text-rlcc-text-main">Sunday Worship Services</h3>
            <div className="mt-4 space-y-2 text-base text-rlcc-text-main">
              {serviceTimes.services.map((service) => (
                <p key={service.label} className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-2">
                  <span>{service.label}</span>
                  <span className="font-medium text-rlcc-text-muted">{service.time}</span>
                </p>
              ))}
            </div>
            <PrimaryButton href={visitPageContent.rsvp.buttonHref} className="mt-6">
              {visitPageContent.rsvp.buttonLabel}
            </PrimaryButton>
          </article>

          <article className="rounded-lg bg-white p-6 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">Online</p>
            <h3 className="mt-2 text-2xl font-bold text-rlcc-text-main">Join from Anywhere</h3>
            <div className="mt-4 space-y-2 text-base text-rlcc-text-main">
              {serviceTimes.services.map((service) => (
                <p key={service.label} className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-2">
                  <span>{service.label}</span>
                  <span className="font-medium text-rlcc-text-muted">{service.time}</span>
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm text-rlcc-text-muted">
              {serviceTimes.onlineDescription}
            </p>
            <PrimaryButton href={serviceTimes.watchOnlineUrl} className="mt-4">
              {serviceTimes.watchOnlineLabel}
            </PrimaryButton>
          </article>
        </div>
      </div>
    </section>
  );
}
