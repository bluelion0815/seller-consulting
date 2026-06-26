import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/ui/Section";
import { Button, ButtonLink } from "../components/ui/Button";
import { Card, CardTitle, CardBody } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export const metadata: Metadata = {
  title: "스타일가이드 — SellerPilot",
  description: "디자인 토큰과 공용 컴포넌트의 단일 기준(SSOT).",
};

const tokens = [
  { name: "brand", varName: "--brand" },
  { name: "brand-hover", varName: "--brand-hover" },
  { name: "accent", varName: "--accent" },
  { name: "background", varName: "--background" },
  { name: "foreground", varName: "--foreground" },
  { name: "muted", varName: "--muted" },
  { name: "border", varName: "--border" },
  { name: "card", varName: "--card" },
];

export default function StyleguidePage() {
  return (
    <>
      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Design System"
          title="스타일가이드"
          subtitle="모든 페이지는 이 토큰과 컴포넌트만 사용합니다 (단일 기준 / SSOT)."
        />
      </Section>

      <Section>
        <h3 className="mb-6 text-xl font-semibold">색상 토큰</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tokens.map((t) => (
            <div key={t.name} className="rounded-[var(--radius)] border border-border p-4">
              <div
                className="h-16 w-full rounded-md border border-border"
                style={{ background: `var(${t.varName})` }}
              />
              <p className="mt-2 text-sm font-medium text-foreground">{t.name}</p>
              <code className="text-xs text-muted">{t.varName}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <h3 className="mb-6 text-xl font-semibold">타이포그래피</h3>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">H1 — 4xl bold</h1>
          <h2 className="text-3xl font-bold tracking-tight">H2 — 3xl bold</h2>
          <h3 className="text-xl font-semibold">H3 — xl semibold</h3>
          <p className="text-base text-foreground">본문 — base, 기본 전경색</p>
          <p className="text-sm text-muted">보조 텍스트 — sm, muted</p>
          <code className="font-mono text-sm">코드 — Geist Mono</code>
        </div>
      </Section>

      <Section className="border-t border-border">
        <h3 className="mb-6 text-xl font-semibold">버튼</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <ButtonLink href="/styleguide" variant="primary" size="lg">
            Link · lg
          </ButtonLink>
          <Button variant="primary" size="sm">
            sm
          </Button>
        </div>
      </Section>

      <Section className="border-t border-border">
        <h3 className="mb-6 text-xl font-semibold">카드 · 배지</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>무료 진단</Badge>
          <Badge>스마트스토어</Badge>
          <Badge>쿠팡</Badge>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardTitle>카드 제목 {i}</CardTitle>
              <CardBody>
                공용 Card 컴포넌트. 모든 서비스/요금 카드가 이 컴포넌트를 재사용합니다.
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
