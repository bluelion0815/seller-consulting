import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { ButtonLink } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export const metadata: Metadata = {
  title: "서비스 | SellerPilot",
  description:
    "매출/운영 진단부터 채널 세팅, 운영 대행, 셀러 교육까지. 스마트스토어·롯데온·쿠팡 멀티마켓 셀러를 위한 SellerPilot 컨설팅 서비스를 소개합니다.",
};

const services = [
  {
    badge: "진단",
    title: "매출/운영 진단",
    description:
      "현재 채널·상품·광고를 무료로 진단하고, 데이터를 기반으로 개선 우선순위를 도출합니다.",
    points: [
      "채널별 매출·전환율 구조 분석",
      "상품/카테고리 경쟁력 점검",
      "광고 효율 진단과 개선 포인트 제시",
    ],
  },
  {
    badge: "세팅",
    title: "채널 세팅",
    description:
      "신규 마켓 입점부터 카테고리/속성 최적화, 상세페이지 세팅까지 한 번에 대행합니다.",
    points: [
      "스마트스토어·롯데온·쿠팡 입점 대행",
      "카테고리/속성 최적화 세팅",
      "전환율 중심 상세페이지 구성",
    ],
  },
  {
    badge: "대행",
    title: "운영 대행",
    description:
      "상품 등록부터 CS, 재고/가격 관리까지 월 단위로 운영을 안정적으로 대행합니다.",
    points: [
      "상품 등록·옵션/이미지 관리",
      "고객 CS 응대 및 리뷰 관리",
      "재고·가격 모니터링과 조정",
    ],
  },
  {
    badge: "교육",
    title: "셀러 교육",
    description:
      "1:1 코칭과 그룹 클래스로 셀러가 직접 운영할 수 있는 역량을 키워드립니다.",
    points: [
      "1:1 맞춤 코칭 세션",
      "실전 그룹 클래스 운영",
      "운영 매뉴얼·체크리스트 제공",
    ],
  },
];

const steps = [
  {
    no: "01",
    title: "상담",
    description: "목표와 현재 상황을 듣고 컨설팅 방향을 함께 정합니다.",
  },
  {
    no: "02",
    title: "진단",
    description: "채널·상품·광고 데이터를 분석해 개선 우선순위를 도출합니다.",
  },
  {
    no: "03",
    title: "실행",
    description: "세팅과 운영을 직접 실행하거나 대행하며 성과를 만듭니다.",
  },
  {
    no: "04",
    title: "리뷰",
    description: "결과를 함께 점검하고 다음 단계를 위한 개선안을 제안합니다.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="셀러 성장에 필요한 모든 컨설팅"
          subtitle="진단에서 실행, 교육까지. 멀티마켓 셀러가 매출을 키우는 데 필요한 모든 단계를 SellerPilot이 함께합니다."
        />

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  <Badge>{service.badge}</Badge>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted">{service.description}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                        />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="aspect-video w-full rounded-[var(--radius)] border border-border bg-card" />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Process"
          title="진행 프로세스"
          subtitle="상담부터 리뷰까지, 명확한 4단계로 컨설팅을 진행합니다."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.no}>
              <span className="text-2xl font-bold text-brand">{step.no}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            어떤 서비스가 맞을지 함께 찾아드릴게요
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            무료 진단으로 우선순위를 확인하고, 합리적인 요금제로 시작하세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" size="lg">
              무료 진단 신청
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              요금 보기
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
