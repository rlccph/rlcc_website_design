import Link from "next/link";
import { notFound } from "next/navigation";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { getWatchPlaylistBySlug, watchPageContent } from "@/data/siteContent";
import Image from "next/image";

export function generateStaticParams() {
  return watchPageContent.seriesByYear.flatMap((group) =>
    group.playlists.map((playlist) => ({ slug: playlist.slug })),
  );
}

export default async function WatchSeriesPage({ params }) {
  const { slug } = await params;
  const playlist = getWatchPlaylistBySlug(slug);

  if (!playlist) {
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
              <Link href="/messages/watch" className="hover:text-rlcc-green">
                Real Life TV
              </Link>
              <span className="mx-2">/</span>
              <span className="text-rlcc-text-main">
                {playlist.title} ({playlist.subtitle.replace(" Series", "")})
              </span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <Image
                src={playlist.image}
                alt={`${playlist.title} series artwork`}
                width={800}
                height={450}
                className="aspect-video w-full rounded-lg object-cover shadow-md"
              />
              <div>
                <h1 className="text-3xl font-black text-rlcc-green-dark sm:text-4xl">
                  {playlist.title} ({playlist.subtitle.replace(" Series", "")})
                </h1>
                {playlist.description && (
                  <p className="mt-4 text-base leading-7 text-rlcc-text-muted">
                    {playlist.description}
                  </p>
                )}
                {playlist.dateRange && (
                  <p className="mt-3 text-sm text-rlcc-text-muted">{playlist.dateRange}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {playlist.messages && playlist.messages.length > 0 && (
          <section className="py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-rlcc-green-dark">Messages in this series</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {playlist.messages.map((message) => (
                  <Link
                    key={message.id}
                    href={`/messages/watch/${playlist.slug}/${message.id}`}
                    className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Image
                      src={playlist.image}
                      alt={message.title}
                      width={640}
                      height={360}
                      className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                        {message.title}
                      </h2>
                      <p className="mt-2 text-sm text-rlcc-text-muted">
                        {message.date} · {message.speaker}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-rlcc-cream py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-rlcc-green-dark">Watch the full series</h2>
            <div className="mt-6">
              <YouTubeEmbed
                playlistId={playlist.playlistId}
                title={`${playlist.title} sermon series`}
              />
            </div>
            <p className="mt-6 text-sm text-rlcc-text-muted">
              <Link href="/messages/watch" className="font-semibold text-rlcc-green hover:text-rlcc-green-dark">
                ← Back to all sermon series
              </Link>
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
