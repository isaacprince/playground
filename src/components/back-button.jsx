import Link from "next/link";

export default function BackButton({
  className = "",
  href = "/#projects",
  label = "Back to projects",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-accent font-inter text-sm font-medium hover:opacity-80 transition-opacity ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
