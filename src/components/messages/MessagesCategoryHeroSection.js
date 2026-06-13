import Image from "next/image";

export default function MessagesCategoryHeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt ?? ""}
          fill
          priority
          className={`object-cover ${hero.imagePosition ?? "object-center"}`}
        />
        <div className="absolute inset-0 bg-[rgba(8,41,0,0.72)]" />
      </div>
      <div className="relative mx-auto flex min-h-[300px] w-full max-w-6xl flex-col justify-center px-4 pt-28 pb-12 sm:min-h-[340px] sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/75">Messages</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">{hero.subtitle}</p>
      </div>
    </section>
  );
}
