import Image from "next/image";
import Link from "next/link";

function categoryBadgeClass(category) {
  return category === "Simple Church"
    ? "bg-rlcc-green-dark text-white"
    : "bg-rlcc-green text-white";
}

export default function CommunityHeroSection({ community }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={community.image}
          alt={community.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(8,41,0,0.72)]" />
      </div>
      <div className="relative mx-auto flex min-h-[360px] w-full max-w-6xl flex-col justify-end px-4 pt-28 pb-14 sm:min-h-[420px] sm:px-6 lg:px-8">
        <nav className="text-sm text-white/80">
          <Link href="/communities" className="transition-colors hover:text-white">
            Communities
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{community.name}</span>
        </nav>
        <span
          className={`mt-6 inline-flex w-fit rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${categoryBadgeClass(community.category)}`}
        >
          {community.category}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {community.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          {community.shortDescription}
        </p>
      </div>
    </section>
  );
}
