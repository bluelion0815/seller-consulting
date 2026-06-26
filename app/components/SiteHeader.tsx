import Link from "next/link";
import { ButtonLink } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/services", label: "서비스" },
  { href: "/pricing", label: "요금" },
  { href: "/contact", label: "상담신청" },
  { href: "/styleguide", label: "스타일가이드" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="inline-block h-6 w-6 rounded-md bg-brand" />
          <span className="text-foreground">SellerPilot</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
            무료 진단
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
