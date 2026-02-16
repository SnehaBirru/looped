import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/generate", label: "Generate" },
];

export function Navigation() {
  return (
    <nav className="flex items-center gap-6 text-sm">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
