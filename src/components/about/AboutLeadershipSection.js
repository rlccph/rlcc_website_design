import Image from "next/image";
import { aboutPageContent } from "@/data/siteContent";

export default function AboutLeadershipSection() {
  const { leadership } = aboutPageContent;
  const { pastor } = leadership;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          {leadership.title}
        </h2>
        <article className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg">
          <div className="grid sm:grid-cols-[12rem_1fr]">
            <Image
              src={pastor.image}
              alt={pastor.imageAlt}
              width={480}
              height={480}
              className="h-56 w-full object-cover sm:h-full sm:min-h-[16rem]"
            />
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-rlcc-green">
                {pastor.role}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-rlcc-text-main">{pastor.name}</h3>
              <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{pastor.bio}</p>
            </div>
          </div>
        </article>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-rlcc-text-muted sm:text-lg">
          {leadership.supportingText}
        </p>
      </div>
    </section>
  );
}
