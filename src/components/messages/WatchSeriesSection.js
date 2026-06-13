import Image from "next/image";
import Link from "next/link";
import { watchPageContent } from "@/data/siteContent";

export default function WatchSeriesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {watchPageContent.seriesByYear.map((group) => (
          <div key={group.year}>
            <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{group.label}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.playlists.map((playlist) => (
                <Link
                  key={playlist.slug}
                  href={`/messages/watch/${playlist.slug}`}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <Image
                    src={playlist.image}
                    alt={`${playlist.title} sermon series`}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rlcc-green">
                      Sermon Series
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-rlcc-text-main">{playlist.title}</h3>
                    <p className="mt-2 text-sm text-rlcc-text-muted">{playlist.subtitle}</p>
                    <p className="mt-4 text-sm font-semibold text-rlcc-green group-hover:text-rlcc-green-dark">
                      View series →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
