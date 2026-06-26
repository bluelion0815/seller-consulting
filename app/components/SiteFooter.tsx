import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded bg-brand" />
          <span className="font-semibold text-foreground">SellerPilot</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/services" className="hover:text-foreground">서비스</Link>
          <Link href="/pricing" className="hover:text-foreground">요금</Link>
          <Link href="/contact" className="hover:text-foreground">상담신청</Link>
        </nav>
        <p>© 2026 SellerPilot. 데모 사이트(과제 제출용).</p>
      </div>
    </footer>
  );
}
