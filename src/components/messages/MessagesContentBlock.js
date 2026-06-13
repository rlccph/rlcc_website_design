import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

function ViewAllLink({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-rlcc-green px-6 py-2.5 text-sm font-semibold text-rlcc-green transition-colors hover:bg-rlcc-green hover:text-white"
    >
      {label}
    </Link>
  );
}

export default function MessagesContentBlock({
  title,
  viewAllHref,
  viewAllLabel = "View all",
  featured,
  recent,
  ctaLabel,
  className = "",
}) {
  return (
    <section className={`py-14 sm:py-16 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-rlcc-green-dark sm:text-3xl">{title}</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
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
            <Link href={featured.href}>
              <h3 className="text-2xl font-bold text-rlcc-text-main hover:text-rlcc-green sm:text-3xl">
                {featured.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-rlcc-text-muted">{featured.date}</p>
            {featured.speaker && (
              <p className="mt-1 text-sm text-rlcc-text-muted">{featured.speaker}</p>
            )}
            <p className="mt-4 text-base leading-7 text-rlcc-text-muted">{featured.description}</p>
            <PrimaryButton href={featured.href} className="mt-6">
              {ctaLabel}
            </PrimaryButton>
          </div>
        </div>

        {recent.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={360}
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-rlcc-text-main group-hover:text-rlcc-green">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-rlcc-text-muted">
                    {item.date}
                    {item.speaker ? ` · ${item.speaker}` : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8">
          <ViewAllLink href={viewAllHref} label={viewAllLabel} />
        </div>
      </div>
    </section>
  );
}
