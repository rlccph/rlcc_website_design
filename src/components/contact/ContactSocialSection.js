import Image from "next/image";
import { contactPageContent } from "@/data/siteContent";

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-rlcc-green transition-colors hover:bg-rlcc-green-dark"
    >
      <Image src={icon} alt="" width={20} height={20} className="h-5 w-5" />
    </a>
  );
}

export default function ContactSocialSection() {
  const { social } = contactPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{social.title}</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {social.links.map((link) => (
            <SocialIcon key={link.label} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
