import Link from "next/link";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import { contactPageContent } from "@/data/siteContent";

const iconClassName = "h-6 w-6 text-rlcc-green";

const cardIcons = {
  envelope: () => <Envelope className={iconClassName} aria-hidden="true" />,
  telephone: () => <Telephone className={iconClassName} aria-hidden="true" />,
  location: () => <GeoAlt className={iconClassName} aria-hidden="true" />,
};

export default function ContactCardsSection() {
  const { contactCards } = contactPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = cardIcons[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rlcc-cream">
                  <Icon />
                </div>
                <h2 className="mt-4 text-lg font-bold text-rlcc-text-main">{card.title}</h2>
                <Link
                  href={card.href}
                  className="mt-3 block text-sm leading-6 text-rlcc-text-muted transition-colors hover:text-rlcc-green"
                  {...(card.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {card.value}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
