import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/ui/Section";
import { Card, CardTitle, CardBody } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export const metadata: Metadata = {
  title: "무료 진단 상담 신청 | SellerPilot(셀러파일럿)",
  description:
    "멀티마켓 셀러 컨설팅 SellerPilot의 무료 진단 상담을 신청하세요. 영업일 기준 1일 내에 연락드립니다. 혼자 운영하지 마세요.",
};

const recommendedFor = [
  "여러 마켓을 동시에 운영하느라 시간이 부족한 셀러",
  "매출은 나는데 마진이 남지 않아 고민인 분",
  "광고비를 쓰는데 효과를 모르겠는 분",
  "혼자 운영하다 한계를 느끼고 있는 분",
];

const fields: { id: string; label: string; type: "input"; inputType: string; placeholder: string }[] = [
  { id: "name", label: "이름", type: "input", inputType: "text", placeholder: "홍길동" },
  { id: "phone", label: "연락처", type: "input", inputType: "tel", placeholder: "010-0000-0000" },
  { id: "email", label: "이메일", type: "input", inputType: "email", placeholder: "you@example.com" },
];

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand";
const labelClass = "block text-sm font-medium text-foreground mb-1.5";

const faqs = [
  {
    q: "상담은 정말 무료인가요?",
    a: "네, 무료 진단 상담은 비용 없이 진행됩니다. 현재 운영 상황을 점검하고 개선 방향을 함께 정리해 드립니다.",
  },
  {
    q: "상담 후 꼭 컨설팅을 받아야 하나요?",
    a: "아니요. 진단 결과를 보고 필요하다고 판단하실 때만 진행하시면 됩니다. 부담 없이 신청하세요.",
  },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="무료 진단 상담 신청"
        subtitle="영업일 기준 1일 내 연락드립니다"
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
        {/* 왼쪽: 안내 영역 */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">이런 분께 추천</h3>
            <ul className="mt-4 space-y-3">
              {recommendedFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-brand"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">연락 정보</h3>
            <dl className="mt-4 space-y-2 text-sm text-muted">
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">이메일</dt>
                <dd>hello@sellerpilot.kr</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">카카오채널</dt>
                <dd>@sellerpilot</dd>
              </div>
            </dl>
          </div>

          <div className="flex items-center gap-3">
            <Badge>평균 응답 시간 4시간 이내</Badge>
          </div>
        </div>

        {/* 오른쪽: 신청 폼 */}
        <div className="rounded-[var(--radius)] border border-border bg-card p-8">
          <form className="space-y-5">
            {fields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className={labelClass}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.inputType}
                  placeholder={field.placeholder}
                  className={fieldClass}
                />
              </div>
            ))}

            <div>
              <label htmlFor="markets" className={labelClass}>
                운영 중인 마켓 수
              </label>
              <select id="markets" name="markets" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  선택해 주세요
                </option>
                <option value="1">1개</option>
                <option value="2-3">2~3개</option>
                <option value="4-5">4~5개</option>
                <option value="6+">6개 이상</option>
              </select>
            </div>

            <div>
              <label htmlFor="revenue" className={labelClass}>
                월 매출 규모
              </label>
              <select id="revenue" name="revenue" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  선택해 주세요
                </option>
                <option value="under-1000">1,000만원 미만</option>
                <option value="1000-3000">1,000~3,000만원</option>
                <option value="3000-1억">3,000만원~1억</option>
                <option value="over-1억">1억 이상</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="현재 운영 상황이나 가장 고민되는 점을 적어 주세요."
                className={fieldClass}
              />
            </div>

            <div className="pt-1">
              <Button type="button" className="w-full justify-center">
                무료 진단 신청하기
              </Button>
              <p className="mt-3 text-center text-xs text-muted">
                * 데모 폼입니다 — 실제 전송되지 않습니다.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* 하단: 자주 묻는 질문 */}
      <div className="mx-auto mt-20 max-w-5xl">
        <h3 className="text-center text-xl font-bold text-foreground">자주 묻는 질문</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <CardTitle>{faq.q}</CardTitle>
              <CardBody>{faq.a}</CardBody>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
