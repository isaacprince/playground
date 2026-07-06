import Link from "next/link";

export default function BackButton({
  className = "",
  href = "/#projects",
  label = "Back to projects",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-[#FF6600] font-neueMachina text-base hover:font-neueMachinaBold transition duration-300 ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
