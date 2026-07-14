import Link from "next/link";

export default function PrimaryButton({
  href = "#",
  children,
  variant = "solid",
  className = "",
  target,
  rel,
  onClick,
}) {
  const isExternal = href.startsWith("http");
  const linkTarget = target ?? (isExternal ? "_blank" : undefined);
  const linkRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  const baseClass =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition-colors";
  const variantClass =
    variant === "outline"
      ? "border border-rlcc-green text-rlcc-green hover:bg-rlcc-green hover:text-white"
      : variant === "outlineLight"
        ? "border border-white text-white hover:bg-white hover:text-rlcc-green-dark"
        : "bg-rlcc-green text-white hover:bg-rlcc-green-dark";

  return (
    <Link
      href={href}
      target={linkTarget}
      rel={linkRel}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
