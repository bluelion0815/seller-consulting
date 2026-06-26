import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/ui/Section";
import { ButtonLink } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export const metadata: Metadata = {
  title: "요금 안내 | SellerPilot(셀러파일럿)",
  description:
    "성장 단계에 맞는 멀티마켓 셀러 컨설팅 패키지 요금을 확인하세요. 첫 진단 상담은 무료입니다.",
};

type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "진단 패키지",
    price: "₩0",
    priceNote: "무료",
    description: "현재 운영 상태를 빠르게 진단하고 개선 방향을 잡아드립니다.",
    features: [
      "채널·상품 진단 리포트",
      "개선 우선순위 정리",
      "경쟁사 벤치마크 요약",
      "1:1 진단 상담 1회",
    ],
    cta: { label: "무료 신청", href: "/contact", variant: "secondary" },
  },
  {
    name: "그로스 패키지",
    price: "₩1,500,000",
    priceNote: "/ 월",
    description: "채널을 세팅하고 정기 코칭으로 매출 성장을 가속합니다.",
    features: [
      "채널 세팅 및 최적화",
      "월 4회 정기 코칭",
      "운영 가이드 문서 제공",
      "광고·프로모션 전략 설계",
      "월간 성과 리포트",
    ],
    cta: { label: "상담 신청", href: "/contact", variant: "primary" },
    highlighted: true,
  },
  {
    name: "운영대행 패키지",
    price: "맞춤 견적",
    description: "상품등록부터 CS, 재고·가격까지 전담팀이 직접 운영합니다.",
    features: [
      "상품등록 전담 운영",
      "고객 CS 응대 대행",
      "재고·가격 관리",
      "정산·데이터 관리",
      "전담 매니저 배정",
    ],
    cta: { label: "문의하기", href: "/contact", variant: "secondary" },
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "최소 계약기간이 있나요?",
    a: "그로스 패키지는 월 단위로 운영되며 최소 3개월을 권장합니다. 첫 달 진행 후 언제든 조정이 가능합니다.",
  },
  {
    q: "환불 정책은 어떻게 되나요?",
    a: "서비스 시작 전이라면 전액 환불됩니다. 진행 중에는 잔여 기간에 대해 일할 계산으로 환불해 드립니다.",
  },
  {
    q: "특정 업종만 컨설팅이 가능한가요?",
    a: "업종 제한은 없습니다. 패션·뷰티·생활·식품 등 다양한 카테고리의 멀티마켓 셀러를 지원합니다.",
  },
  {
    q: "운영대행 패키지는 어디까지 맡길 수 있나요?",
    a: "상품등록, CS, 재고·가격 관리, 정산 데이터 정리까지 전담팀이 운영합니다. 범위는 견적 단계에서 조율합니다.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="성장 단계에 맞는 컨설팅 패키지"
          subtitle="첫 진단 상담은 무료입니다"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[var(--radius)] border border-border bg-card p-8 ${
                plan.highlighted ? "ring-2 ring-brand" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-6 top-6">
                  <Badge>추천</Badge>
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.priceNote && (
                  <span className="text-sm text-muted">{plan.priceNote}</span>
                )}
              </div>

              <p className="mt-3 text-muted">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="text-brand" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <ButtonLink
                  href={plan.cta.href}
                  variant={plan.cta.variant}
                  className="w-full justify-center"
                >
                  {plan.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-[var(--radius)] border border-border bg-background p-6"
            >
              <summary className="cursor-pointer font-medium text-foreground">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            어떤 패키지가 맞을지 고민되시나요?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            무료 진단 상담으로 우리 매장에 맞는 컨설팅 방향을 먼저 확인해 보세요.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="primary" size="lg">
              무료 진단 상담 신청
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
