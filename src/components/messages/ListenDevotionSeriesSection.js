import Image from "next/image";
import Link from "next/link";
import { listenPageContent } from "@/data/siteContent";

export default function ListenDevotionSeriesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listenPageContent.devotionSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/messages/listen/${series.slug}`}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={series.image}
                alt={series.title}
                width={640}
                height={360}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rlcc-green">
                  {series.relatedWatchSeriesSlug ? "From a Sunday series" : "Standalone"}
                </p>
                <h2 className="mt-2 text-lg font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                  {series.title}
                </h2>
                <p className="mt-2 text-sm text-rlcc-text-muted">{series.subtitle}</p>
                <p className="mt-3 text-sm font-semibold text-rlcc-green">View devotions →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
