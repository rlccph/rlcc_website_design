import Image from "next/image";

export default function CommunityAboutSection({ community }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
              About This Community
            </h2>
            <p className="mt-5 text-base leading-7 text-rlcc-text-muted sm:text-lg">
              {community.fullDescription}
            </p>
          </div>
          <Image
            src={community.image}
            alt={community.imageAlt}
            width={900}
            height={560}
            className="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}
