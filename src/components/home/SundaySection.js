import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { watchPageContent } from "@/data/siteContent";

export default function SundaySection() {
  const { featured, live } = watchPageContent;

  return (
    <section className="bg-rlcc-surface pb-12 pt-0 sm:pb-16">
      <div className="relative z-10 mx-auto -mt-12 w-full max-w-6xl px-4 sm:-mt-20 sm:px-6 lg:-mt-24 lg:px-8">
        <div className="rounded-lg bg-white p-5 shadow-xl sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_2fr_1fr] lg:items-center">
            <Image
              src={featured.image}
              alt={`${featured.seriesTitle} series artwork`}
              width={560}
              height={300}
              className="h-36 w-full rounded-sm object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-rlcc-green-dark">Join the Sunday Live Stream</h3>
              <p className="mt-2 text-sm leading-6 text-rlcc-text-muted">
                Can&apos;t make it in person? Join us live on Real Life TV — worship, chat, and
                prayer together online.
              </p>
              <p className="mt-2 text-sm font-semibold text-rlcc-text-main">
                Every Sunday at 9:00 AM &amp; 11:00 AM
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <PrimaryButton href={live.url} className="w-full">
                {live.buttonLabel}
              </PrimaryButton>
              <PrimaryButton href="/messages/watch" variant="outline" className="w-full">
                View Past Messages
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
