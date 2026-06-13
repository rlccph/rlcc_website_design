import PrimaryButton from "@/components/ui/PrimaryButton";
import { contactPageContent } from "@/data/siteContent";

export default function ContactServiceLocationSection() {
  const { serviceLocation } = contactPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
            {serviceLocation.title}
          </h2>
          <ul className="mt-6 space-y-2">
            {serviceLocation.services.map((service) => (
              <li
                key={service.label}
                className="flex items-center gap-2 text-base text-rlcc-text-main sm:text-lg"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-rlcc-green" aria-hidden="true" />
                {service.label}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-7 text-rlcc-text-muted">{serviceLocation.address}</p>
          <PrimaryButton href={serviceLocation.directionsUrl} className="mt-6">
            {serviceLocation.directionsLabel}
          </PrimaryButton>
        </div>

        <div className="overflow-hidden rounded-lg border border-black/10 shadow-lg">
          <iframe
            src={serviceLocation.mapEmbedUrl}
            title="RLCC Hope Center map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
