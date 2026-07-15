import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

/**
 * Related weekday podcast / devotion series for one Sunday Watch message.
 * Only rendered when a Listen series sets relatedWatchSeriesSlug + relatedWatchMessageId.
 * Free-floating podcasts (no relation) never appear here.
 */
export default function WatchRelatedListenSection({ listenSeries, watchMessageTitle }) {
  if (!listenSeries?.length) {
    return null;
  }

  return (
    <section className="border-t border-black/5 bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">
          Go deeper through the week
        </p>
        <h2 className="mt-3 text-2xl font-bold text-rlcc-green-dark sm:text-3xl">
          Listen — daily podcasts from this message
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-rlcc-text-muted">
          {watchMessageTitle} is unpacked across the following weekdays — short episodes you can
          listen to as you go.
        </p>

        <div className={`mt-10 grid gap-6 ${listenSeries.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {listenSeries.map((series) => (
            <article
              key={series.slug}
              className="overflow-hidden rounded-lg border border-black/10 bg-rlcc-surface shadow-sm"
            >
              <div className="grid sm:grid-cols-[1fr_1.2fr]">
                <Image
                  src={series.image}
                  alt={series.title}
                  width={640}
                  height={360}
                  className="h-44 w-full object-cover sm:h-full"
                />
                <div className="flex flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rlcc-green">
                    Daily Devotions · {series.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-rlcc-text-main">{series.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-rlcc-text-muted">
                    {series.description}
                  </p>
                  <p className="mt-3 text-sm text-rlcc-text-muted">
                    {series.episodes.length} episode{series.episodes.length === 1 ? "" : "s"}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <PrimaryButton href={`/messages/listen/${series.slug}`}>
                      Listen to the series
                    </PrimaryButton>
                    {series.episodes[0] && (
                      <PrimaryButton
                        href={`/messages/listen/${series.slug}/${
                          [...series.episodes].reverse().find((ep) => ep.id.startsWith("day-1"))
                            ?.id ?? series.episodes[series.episodes.length - 1].id
                        }`}
                        variant="outline"
                      >
                        Start Day 1
                      </PrimaryButton>
                    )}
                  </div>
                </div>
              </div>

              {series.episodes.length > 0 && (
                <div className="border-t border-black/5 bg-white px-5 py-4 sm:px-6">
                  <p className="text-sm font-semibold text-rlcc-text-main">This week&apos;s episodes</p>
                  <ul className="mt-3 space-y-2">
                    {[...series.episodes].reverse().map((episode) => (
                      <li key={episode.id}>
                        <Link
                          href={`/messages/listen/${series.slug}/${episode.id}`}
                          className="group flex flex-wrap items-baseline justify-between gap-2 text-sm"
                        >
                          <span className="font-medium text-rlcc-text-main group-hover:text-rlcc-green">
                            {episode.title}
                          </span>
                          <span className="text-rlcc-text-muted">{episode.date}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
