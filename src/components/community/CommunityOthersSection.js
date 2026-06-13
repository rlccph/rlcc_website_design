import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CommunityOthersSection({ communities }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          Explore Other Communities
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={community.image}
                alt={community.imageAlt}
                width={640}
                height={360}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rlcc-green">
                  {community.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                  {community.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-rlcc-text-muted">
                  {community.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <PrimaryButton href="/communities" variant="outline">
            See All Communities
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
