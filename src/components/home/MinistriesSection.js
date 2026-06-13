import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { ministriesHighlight } from "@/data/siteContent";

export default function MinistriesSection() {
  return (
    <section>
      <div className="relative overflow-hidden bg-rlcc-cream">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            src={ministriesHighlight.image}
            alt=""
            fill
            className="absolute inset-0 h-full w-full object-cover opacity-5"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
                {ministriesHighlight.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-rlcc-text-muted">
                {ministriesHighlight.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-rlcc-text-main">
                {ministriesHighlight.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rlcc-green" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/communities">Find Your Community</PrimaryButton>
                <PrimaryButton href="/communities" variant="outline">
                  Talk to a Pastor
                </PrimaryButton>
              </div>
            </div>
            <Image
              src={ministriesHighlight.image}
              alt="RLCC ministries and communities"
              width={900}
              height={560}
              className="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rlcc-green">Why We Exist</p>
          <p className="mt-4 text-xl font-semibold text-rlcc-text-main sm:text-2xl">
            RLCC exists to help people experience real life in Christ together with others.
          </p>
          <p className="mt-3 text-base leading-7 text-rlcc-text-muted sm:text-lg">
            From worship to communities to ministry, every step is about helping people know Jesus
            deeply and live for Him in everyday life.
          </p>
          <p className="mt-4 text-2xl leading-tight text-rlcc-text-main italic font-semibold sm:text-3xl">
            &quot;The thief comes only to steal and kill and destroy; I have come that they may have
            life, and have it to the full.&quot;
          </p>
          <p className="mt-3 text-xl text-rlcc-text-main font-medium italic">- Jesus (John 10:10)</p>
        </div>
      </div>
    </section>
  );
}
