import type { Metadata } from "next";
import { Section, SectionHeading } from "./components/ui/Section";
import { Card, CardTitle, CardBody } from "./components/ui/Card";
import { ButtonLink } from "./components/ui/Button";
import { Badge } from "./components/ui/Badge";

export const metadata: Metadata = {
  title: "SellerPilot(셀러파일럿) — 멀티마켓 셀러를 위한 매출 컨설팅",
  description:
    "혼자 운영하지 마세요. 스마트스토어·롯데온·쿠팡 등 멀티마켓 운영 셀러를 위한 진단·채널세팅·운영대행·교육 컨설팅. 멀티마켓 매출, 전문가와 함께.",
};

const markets = ["스마트스토어", "롯데온", "쿠팡", "무신사"];

const worries = [
  {
    title: "매출 정체",
    body: "광고비는 늘어나는데 매출은 제자리. 무엇을 바꿔야 할지 막막하신가요?",
  },
  {
    title: "운영 과부하",
    body: "상품 등록, CS, 정산까지 혼자 처리하느라 정작 성장에 쓸 시간이 없으신가요?",
  },
  {
    title: "마켓별 정책 혼란",
    body: "마켓마다 다른 수수료·노출 로직·정책 변경에 매번 휘둘리고 계신가요?",
  },
];

const services = [
  {
    title: "진단",
    body: "현재 채널·상품·광고 데이터를 분석해 매출 병목 지점을 정확히 짚어드립니다.",
  },
  {
    title: "채널 세팅",
    body: "마켓별 최적 카테고리·키워드·노출 전략으로 신규 채널을 빠르게 안착시킵니다.",
  },
  {
    title: "운영 대행",
    body: "상품 등록부터 광고 운영, CS까지 전문 인력이 멀티마켓을 대신 운영합니다.",
  },
  {
    title: "셀러 교육",
    body: "내부 운영 역량을 키우는 실전 중심 교육으로 자립형 셀러로 성장시킵니다.",
  },
];

const stats = [
  { value: "+180%", label: "평균 매출 성장률" },
  { value: "-60%", label: "운영 시간 절감" },
  { value: "320+개사", label: "누적 컨설팅 실적" },
];

const reviews = [
  {
    quote:
      "채널 세팅만 맡겼는데 두 달 만에 롯데온 매출이 3배가 됐어요. 혼자였다면 절대 못 했을 일입니다.",
    name: "김O현 대표",
    field: "패션 잡화",
  },
  {
    quote:
      "운영 대행 덕분에 제품 개발에만 집중할 수 있게 됐습니다. 시간과 매출을 동시에 잡았어요.",
    name: "이O준 대표",
    field: "리빙·홈데코",
  },
  {
    quote:
      "막연하던 광고비 구조를 진단으로 정리해주셔서 광고 효율이 눈에 띄게 좋아졌습니다.",
    name: "박O은 대표",
    field: "뷰티·코스메틱",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {markets.map((m) => (
              <Badge key={m}>{m}</Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            혼자 운영하지 마세요
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            멀티마켓 매출, 전문가와 함께. 스마트스토어부터 쿠팡까지
            <br className="hidden sm:block" />
            진단·세팅·운영·교육을 한 곳에서.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" size="lg">
              무료 진단 신청
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              서비스 보기
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 문제 공감 */}
      <Section className="bg-card">
        <SectionHeading
          eyebrow="Pain Points"
          title="이런 고민 있으신가요?"
          subtitle="멀티마켓 셀러라면 누구나 겪는 세 가지 벽. SellerPilot이 함께 넘습니다."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {worries.map((w) => (
            <Card key={w.title}>
              <CardTitle>{w.title}</CardTitle>
              <CardBody>{w.body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* 서비스 4종 */}
      <Section className="bg-background">
        <SectionHeading
          eyebrow="Services"
          title="진단부터 교육까지, 한 번에"
          subtitle="셀러의 성장 단계에 맞춰 필요한 만큼만 제공하는 4가지 핵심 서비스."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title}>
              <CardTitle>{s.title}</CardTitle>
              <CardBody>{s.body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* 성과 지표 */}
      <Section className="bg-card">
        <SectionHeading
          eyebrow="Results"
          title="숫자로 증명하는 성과"
          subtitle="SellerPilot과 함께한 셀러들이 만들어낸 변화입니다."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted">{s.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 후기 */}
      <Section className="bg-background">
        <SectionHeading
          eyebrow="Reviews"
          title="셀러들의 진짜 후기"
          subtitle="혼자였다면 어려웠을 변화를, 함께 만들어낸 이야기."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name}>
              <p className="text-base leading-7 text-foreground">“{r.quote}”</p>
              <p className="mt-4 text-sm text-muted">
                {r.name} · {r.field}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 마지막 CTA */}
      <Section className="bg-background">
        <div className="rounded-[var(--radius)] bg-brand px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-brand-fg sm:text-4xl">
            지금 무료 진단을 받아보세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-fg/80">
            5분이면 충분합니다. 우리 스토어의 매출 병목, 전문가가 무료로 짚어드립니다.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="secondary" size="lg">
              무료 진단 신청하기
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
