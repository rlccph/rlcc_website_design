import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { watchPageContent } from "@/data/siteContent";

export default function WatchFeaturedSection() {
  const { featured, live } = watchPageContent;

  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <Link
              href={featured.href}
              className="group relative block aspect-video overflow-hidden lg:aspect-auto lg:h-full lg:min-h-full"
            >
              <Image
                src={featured.image}
                alt={`${featured.seriesTitle} series artwork`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">
                {featured.eyebrow}
              </p>
              <Link href={featured.seriesHref}>
                <h2 className="mt-2 text-2xl font-black text-rlcc-green-dark hover:text-rlcc-green sm:text-3xl">
                  {featured.seriesTitle}
                </h2>
              </Link>
              <p className="mt-1 text-sm font-medium text-rlcc-text-muted">{featured.seriesSubtitle}</p>
              <Link href={featured.href}>
                <h3 className="mt-5 text-xl font-bold text-rlcc-text-main hover:text-rlcc-green">
                  {featured.messageTitle}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-rlcc-text-muted">
                {featured.date} · {featured.speaker}
              </p>
              <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{featured.description}</p>
              <PrimaryButton href={featured.href} className="mt-6">
                {featured.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-rlcc-text-main">{live.title}</p>
            <p className="mt-1 text-sm text-rlcc-text-muted">
              {live.services.map((service, index) => (
                <span key={service.label}>
                  {index > 0 ? " · " : ""}
                  {service.time} {service.label}
                </span>
              ))}
              {" · "}
              Also on {live.platforms.join(", ")}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            <PrimaryButton href={live.url} className="w-full sm:w-auto">
              {live.buttonLabel}
            </PrimaryButton>
            <PrimaryButton href={live.youtubeLiveUrl} variant="outline" className="w-full sm:w-auto">
              {live.youtubeButtonLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
