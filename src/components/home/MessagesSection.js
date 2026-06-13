import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { homepageMessagesContent } from "@/data/siteContent";

export default function MessagesSection() {
  const { featured } = homepageMessagesContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
            {homepageMessagesContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-rlcc-text-muted sm:text-lg">
            {homepageMessagesContent.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Link
            href={featured.href}
            className="group relative block aspect-video overflow-hidden rounded-lg shadow-md lg:aspect-auto lg:h-full lg:min-h-full"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">
              Latest Message
            </p>
            <Link href={featured.href}>
              <h3 className="mt-2 text-2xl font-bold text-rlcc-text-main hover:text-rlcc-green sm:text-3xl">
                {featured.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-rlcc-text-muted">
              {featured.date} · {featured.speaker}
            </p>
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{featured.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={featured.href}>{featured.ctaLabel}</PrimaryButton>
              <PrimaryButton href={homepageMessagesContent.exploreHref} variant="outline">
                {homepageMessagesContent.exploreLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
