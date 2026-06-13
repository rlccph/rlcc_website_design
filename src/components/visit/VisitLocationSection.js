import PrimaryButton from "@/components/ui/PrimaryButton";
import { visitPageContent } from "@/data/siteContent";

export default function VisitLocationSection() {
  const { location } = visitPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{location.title}</h2>
          <p className="mt-5 text-xl font-semibold text-rlcc-text-main">{location.venue}</p>
          <p className="mt-3 text-base leading-7 text-rlcc-text-muted">{location.address}</p>
          <p className="mt-3 text-base leading-7 text-rlcc-text-main">{location.parking}</p>
          <PrimaryButton href={location.directionsUrl} className="mt-6">
            Get Directions
          </PrimaryButton>
        </div>

        <div className="overflow-hidden rounded-lg border border-black/10 shadow-lg">
          <iframe
            src={location.mapEmbedUrl}
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
