import Image from "next/image";
import Link from "next/link";
import { messagesPageContent } from "@/data/siteContent";

export default function MessagesRecentSeriesSection() {
  const { recentSeries } = messagesPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-rlcc-green-dark sm:text-3xl">{recentSeries.title}</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentSeries.items.map((series) => (
            <Link
              key={series.slug}
              href={series.href}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={series.image}
                alt={`${series.title} series`}
                width={640}
                height={360}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                  {series.title} ({series.subtitle})
                </h3>
                <p className="mt-2 text-sm text-rlcc-text-muted">{series.dateRange}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={recentSeries.viewAllHref}
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-rlcc-green px-6 py-2.5 text-sm font-semibold text-rlcc-green transition-colors hover:bg-rlcc-green hover:text-white"
        >
          {recentSeries.viewAllLabel}
        </Link>
      </div>
    </section>
  );
}
