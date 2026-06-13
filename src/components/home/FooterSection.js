import Image from "next/image";
import Link from "next/link";
import { brandAssets, footerData } from "@/data/siteContent";

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.55c.02 2.18 1.9 2.9 1.92 2.91-.02.05-.3 1.03-.99 2.04-.6.88-1.22 1.76-2.2 1.78-.96.02-1.27-.57-2.37-.57-1.1 0-1.45.55-2.35.59-1 .04-1.76-.96-2.37-1.83-1.24-1.79-2.19-5.06-.92-7.26.63-1.09 1.76-1.78 2.98-1.8.93-.02 1.81.63 2.37.63.56 0 1.61-.78 2.72-.66.47.02 1.79.19 2.64 1.43-.07.04-1.57.92-1.56 2.74ZM14.33 6.66c.5-.61.84-1.46.75-2.31-.72.03-1.58.48-2.1 1.09-.46.54-.86 1.4-.75 2.23.8.06 1.6-.41 2.1-1.01Z"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M3 3.5v17l9.5-8.5L3 3.5Zm10.7 9 2.8-2.5 4.2 2.5-4.2 2.5-2.8-2.5Zm1.8-3.4 2.8-2.5c.8.5 2 1.2 2.8 1.6-.8.5-2 1.2-2.8 1.7l-2.8-2.6Zm0 6.8 2.8 2.6c.8-.5 2-1.2 2.8-1.7-.8-.5-2-1.1-2.8-1.6l-2.8 2.5ZM4.2 21l8.8-7.8 2.8 2.5L4.2 21Zm0-18 11.6 5.3-2.8 2.5L4.2 3Z" />
    </svg>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
    >
      <Image src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
    </a>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-[#082900] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src={brandAssets.logo}
              alt="Real Life Christian Communities"
              width={1024}
              height={143}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm leading-6 text-white/80">{footerData.address}</p>
            <div className="mt-5 flex items-center gap-2">
              {footerData.socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/90">Quick Links</p>
            <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/90">Contact Info</p>
            <p className="mt-4 text-sm text-white/80">{footerData.contact.email}</p>
            <p className="mt-2 text-sm text-white/80">{footerData.contact.phone}</p>
            <p className="mt-6 text-sm font-semibold text-white/90">Download App</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <AppStoreIcon />
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <GooglePlayIcon />
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/75">
          <p>© 2026 Real Life Christian Communities</p>
        </div>
      </div>
    </footer>
  );
}
