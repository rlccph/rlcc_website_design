import Image from "next/image";
import { aboutPageContent } from "@/data/siteContent";

export default function AboutHeroSection() {
  const { hero } = aboutPageContent;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(8,41,0,0.72)]" />
      </div>
      <div className="relative mx-auto flex min-h-[360px] w-full max-w-6xl flex-col justify-center px-4 pt-28 pb-14 sm:min-h-[420px] sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
}
