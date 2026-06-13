"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brandAssets, navLinks } from "@/data/siteContent";

function isNavItemActive(pathname, link) {
  if (link.children) {
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  }

  return pathname === link.href;
}

function isChildActive(pathname, href) {
  if (href === "/messages") {
    return pathname === "/messages";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function ChevronDownIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.776-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.811Z"
      />
    </svg>
  );
}

function NavChildLink({ child, pathname, className, onNavigate }) {
  const childActive = !child.external && isChildActive(pathname, child.href);
  const linkClass =
    className ??
    `block px-4 py-2.5 text-sm transition-colors ${
      childActive
        ? "bg-rlcc-cream font-extrabold text-rlcc-green"
        : "font-medium text-rlcc-text-main hover:bg-rlcc-surface hover:text-rlcc-green"
    }`;

  return (
    <Link
      href={child.href}
      aria-current={childActive ? "page" : undefined}
      target={child.external ? "_blank" : undefined}
      rel={child.external ? "noopener noreferrer" : undefined}
      className={linkClass}
      onClick={onNavigate}
    >
      {child.label}
    </Link>
  );
}

function NavLink({ link, useLightBrand, pathname }) {
  const isActive = isNavItemActive(pathname, link);
  const linkClass = `${
    isActive ? "font-extrabold" : "font-medium"
  } transition-colors ${
    useLightBrand
      ? isActive
        ? "text-rlcc-green"
        : "text-rlcc-text-main hover:text-rlcc-green"
      : isActive
        ? "text-white"
        : "text-white/90 hover:text-white"
  }`;

  if (link.children) {
    return (
      <li className="group relative">
        <Link
          href={link.href}
          className={`inline-flex items-center gap-1 ${linkClass}`}
          aria-current={isActive ? "page" : undefined}
        >
          {link.label}
          <ChevronDownIcon />
        </Link>
        <div className="pointer-events-none absolute left-1/2 top-full z-30 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
          <ul className="overflow-hidden rounded-lg border border-black/10 bg-white py-2 shadow-lg">
            {link.children.map((child) => (
              <li key={child.href}>
                <NavChildLink child={child} pathname={pathname} />
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={link.href}
        className={linkClass}
        aria-current={isActive ? "page" : undefined}
      >
        {link.label}
      </Link>
    </li>
  );
}

function MobileNavLink({ link, pathname, onNavigate }) {
  const isActive = isNavItemActive(pathname, link);
  const [isExpanded, setIsExpanded] = useState(false);

  if (link.children) {
    return (
      <li className="border-b border-black/10">
        <button
          type="button"
          className={`flex w-full items-center justify-between py-4 text-left text-base ${
            isActive ? "font-extrabold text-rlcc-green" : "font-medium text-rlcc-text-main"
          }`}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((open) => !open)}
        >
          {link.label}
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
        {isExpanded ? (
          <ul className="space-y-1 pb-4 pl-3">
            {link.children.map((child) => (
              <li key={child.href}>
                <NavChildLink
                  child={child}
                  pathname={pathname}
                  onNavigate={onNavigate}
                  className={`block rounded-md px-3 py-2.5 text-sm ${
                    !child.external && isChildActive(pathname, child.href)
                      ? "bg-rlcc-cream font-extrabold text-rlcc-green"
                      : "font-medium text-rlcc-text-main hover:bg-rlcc-surface hover:text-rlcc-green"
                  }`}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li className="border-b border-black/10">
      <Link
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        className={`block py-4 text-base ${
          isActive ? "font-extrabold text-rlcc-green" : "font-medium text-rlcc-text-main"
        }`}
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    </li>
  );
}

export default function NavigationSection({ variant = "overlay" }) {
  const pathname = usePathname();
  const isHero = variant === "overlay";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const useLightBrand = isScrolled || !isHero || mobileMenuOpen;
  const toggleIconClass = useLightBrand ? "text-rlcc-text-main" : "text-white";

  const headerClass = mobileMenuOpen
    ? "fixed inset-0 z-50 flex flex-col bg-white md:static md:inset-auto md:z-40 md:flex-none md:bg-transparent"
    : isScrolled
      ? "fixed inset-x-0 top-0 z-40 border-b border-black/[0.06] bg-white/75 backdrop-blur-md"
      : isHero
        ? "absolute inset-x-0 top-0 z-40 border-b border-transparent bg-transparent backdrop-blur-none"
        : "sticky inset-x-0 top-0 z-40 border-b border-transparent bg-transparent backdrop-blur-none";

  return (
    <header className={`transition-all duration-300 ${headerClass}`}>
      <nav
        className={`mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8 ${
          mobileMenuOpen ? "border-b border-black/10" : ""
        }`}
      >
        <Link href="/" className="inline-flex items-center">
          <Image
            src={useLightBrand ? brandAssets.logoOnLight : brandAssets.logo}
            alt="Real Life Christian Communities"
            width={1024}
            height={143}
            className="h-8 w-auto transition-opacity duration-300 sm:h-10"
          />
        </Link>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              useLightBrand={useLightBrand}
              pathname={pathname}
            />
          ))}
        </ul>
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${toggleIconClass}`}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="flex-1 overflow-y-auto bg-white md:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                link={link}
                pathname={pathname}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
