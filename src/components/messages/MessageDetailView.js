import Image from "next/image";
import Link from "next/link";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function MessageDetailView({
  message,
  archiveHref,
  archiveLabel,
  sectionLabel,
}) {
  const { series, siblings } = message;
  const otherMessages = siblings.filter((item) => item.id !== message.id);

  return (
    <main>
      <section className="bg-rlcc-surface py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-rlcc-text-muted">
            <Link href="/messages" className="hover:text-rlcc-green">
              Messages
            </Link>
            <span className="mx-2">/</span>
            <Link href={archiveHref} className="hover:text-rlcc-green">
              {sectionLabel}
            </Link>
            <span className="mx-2">/</span>
            <Link href={message.seriesHref} className="hover:text-rlcc-green">
              {series.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-rlcc-text-main">{message.title}</span>
          </nav>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">
              {series.title}
              {series.subtitle ? ` · ${series.subtitle.replace(" Series", "")}` : ""}
            </p>
            <h1 className="mt-3 text-3xl font-black text-rlcc-green-dark sm:text-4xl">
              {message.title}
            </h1>
            <p className="mt-3 text-sm text-rlcc-text-muted sm:text-base">
              {message.date} · {message.speaker}
            </p>
            {message.description && (
              <p className="mt-5 max-w-3xl text-base leading-7 text-rlcc-text-muted">
                {message.description}
              </p>
            )}
          </div>

          <div className="mt-8">
            {message.videoId ? (
              <YouTubeEmbed videoId={message.videoId} title={message.title} />
            ) : (
              <YouTubeEmbed
                playlistId={series.playlistId}
                title={`${series.title} series`}
              />
            )}
          </div>

          <p className="mt-6 text-sm text-rlcc-text-muted">
            <Link
              href={message.seriesHref}
              className="font-semibold text-rlcc-green hover:text-rlcc-green-dark"
            >
              ← Back to {series.title}
            </Link>
            <span className="mx-2 text-black/20">|</span>
            <Link
              href={archiveHref}
              className="font-semibold text-rlcc-green hover:text-rlcc-green-dark"
            >
              {archiveLabel}
            </Link>
          </p>
        </div>
      </section>

      {otherMessages.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-rlcc-green-dark">
              More from {series.title}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherMessages.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <Image
                    src={series.image}
                    alt={item.title}
                    width={640}
                    height={360}
                    className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-rlcc-text-muted">
                      {item.date} · {item.speaker}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
