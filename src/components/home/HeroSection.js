import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { heroSlides } from "@/data/siteContent";

export default function HeroSection() {
  const slide = heroSlides[0];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={slide.image} alt="RLCC hero" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-rlcc-overlay" />
      </div>
      <div className="relative mx-auto flex min-h-[500px] w-full max-w-6xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:min-h-[620px] sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-[72rem] text-base leading-7 text-white/90 sm:text-lg">
          {slide.description}
          <br />
          Whether you&apos;re new to faith or looking for a church to call home, you are welcome
          here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton href="/visit">Plan Your Visit</PrimaryButton>
          <PrimaryButton href="/communities" variant="outlineLight">
            Get Connected
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
