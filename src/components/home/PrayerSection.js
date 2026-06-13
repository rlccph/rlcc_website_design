import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { prayerSection } from "@/data/siteContent";

export default function PrayerSection() {
  return (
    <section className="relative overflow-hidden pb-8 sm:pb-10 lg:pb-0">
      <div className="absolute inset-0">
        <Image
          src={prayerSection.image}
          alt=""
          fill
          className="object-cover object-[18%_center] sm:object-[24%_center] lg:object-left"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,41,0,0.9)_0%,rgba(8,41,0,0.55)_38%,rgba(53,83,56,0.1)_72%)] md:bg-[linear-gradient(90deg,rgba(53,83,56,0.05)_0%,rgba(8,41,0,0.78)_52%,rgba(8,41,0,0.95)_100%)] lg:bg-[linear-gradient(90deg,rgba(53,83,56,0)_0%,rgba(8,41,0,1)_60%)]" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[380px] w-full max-w-6xl items-start justify-start px-4 pb-6 pt-8 sm:min-h-[420px] sm:px-6 sm:pt-10 md:items-center md:justify-end md:py-16 md:pb-0 md:pt-0 lg:grid lg:min-h-[520px] lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-[16rem] sm:max-w-xs lg:col-start-2 lg:max-w-md">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{prayerSection.title}</h2>
          <p className="mt-3 text-base text-white/90">{prayerSection.description}</p>
          <PrimaryButton href="/contact" className="mt-7">
            Submit a Prayer Request
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
