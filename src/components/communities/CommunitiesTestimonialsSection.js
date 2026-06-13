import Image from "next/image";
import { communitiesPageContent } from "@/data/siteContent";

export default function CommunitiesTestimonialsSection() {
  const { testimonials } = communitiesPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          {testimonials.title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-lg border border-black/10 bg-white p-6 shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="h-16 w-16 rounded-full object-cover"
              />
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-rlcc-text-muted italic">
                &quot;{item.quote}&quot;
              </blockquote>
              <div className="mt-4 border-t border-black/10 pt-4">
                <p className="font-semibold text-rlcc-text-main">{item.name}</p>
                <p className="mt-1 text-sm text-rlcc-green">{item.communityType}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
