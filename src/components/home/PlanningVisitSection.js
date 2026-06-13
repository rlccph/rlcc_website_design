import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { sundayCards, visitHighlights } from "@/data/siteContent";

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-rlcc-green" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.07 5.56 11.72 6.2 12.47a1 1 0 0 0 1.6 0C13.44 20.72 19 14.07 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

export default function PlanningVisitSection() {
  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr_1fr]">
          <article className="rounded-lg bg-transparent p-2">
            <h2 className="text-3xl font-bold text-rlcc-green-dark">Planning to Visit?</h2>
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{visitHighlights.description}</p>
            <div className="mt-5 flex items-start gap-3">
              <MapPinIcon />
              <div>
                <p className="font-semibold text-rlcc-green">{visitHighlights.locationName}</p>
                <p className="text-sm leading-6 text-rlcc-text-main">{visitHighlights.locationAddress}</p>
              </div>
            </div>
            <PrimaryButton href="/visit" className="mt-6">
              Get Directions
            </PrimaryButton>
          </article>

          {sundayCards.map((card) => (
            <article key={card.title} className="rounded-lg bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={420}
                  height={180}
                  className="h-52 w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,41,0,0.28)_12%,rgba(8,41,0,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-white/90">{card.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-1 text-sm text-rlcc-text-main">
                  {card.details.map((item) => (
                    <p key={item.label} className="flex justify-between gap-4 border-b border-black/10 pb-2">
                      <span>{item.label}</span>
                      <span className="text-rlcc-text-muted">{item.time}</span>
                    </p>
                  ))}
                </div>
                <PrimaryButton href={card.ctaHref} variant="outline" className="mt-4">
                  {card.ctaLabel}
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
