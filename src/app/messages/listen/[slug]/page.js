import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { getListenSeriesBySlug, listenPageContent } from "@/data/siteContent";

export function generateStaticParams() {
  return listenPageContent.devotionSeries.map((series) => ({ slug: series.slug }));
}

export default async function ListenSeriesPage({ params }) {
  const { slug } = await params;
  const series = getListenSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  return (
    <div className="bg-white">
      <NavigationSection variant="light" />
      <main>
        <section className="bg-rlcc-surface py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-rlcc-text-muted">
              <Link href="/messages" className="hover:text-rlcc-green">
                Messages
              </Link>
              <span className="mx-2">/</span>
              <Link href="/messages/listen" className="hover:text-rlcc-green">
                RLCC Daily Devotions
              </Link>
              <span className="mx-2">/</span>
              <span className="text-rlcc-text-main">
                {series.title} ({series.subtitle})
              </span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <Image
                src={series.image}
                alt={series.title}
                width={800}
                height={450}
                className="aspect-video w-full rounded-lg object-cover shadow-md"
              />
              <div>
                <h1 className="text-3xl font-black text-rlcc-green-dark sm:text-4xl">
                  {series.title} ({series.subtitle})
                </h1>
                <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{series.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {series.episodes.map((episode) => (
                <article
                  key={episode.id}
                  className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm"
                >
                  <Image
                    src={series.image}
                    alt={episode.title}
                    width={640}
                    height={360}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-bold text-rlcc-text-main">{episode.title}</h2>
                    <p className="mt-2 text-sm text-rlcc-text-muted">
                      {episode.date} · {episode.speaker}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rlcc-cream py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-rlcc-green-dark">Listen to the series</h2>
            <div className="mt-6">
              <YouTubeEmbed playlistId={series.playlistId} title={series.title} />
            </div>
            <p className="mt-6 text-sm text-rlcc-text-muted">
              <Link href="/messages/listen" className="font-semibold text-rlcc-green hover:text-rlcc-green-dark">
                ← Back to all devotion series
              </Link>
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
