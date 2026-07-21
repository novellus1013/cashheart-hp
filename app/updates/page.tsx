import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { PolicyLayout } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "업데이트 내역 - CashHeart",
  description: "CashHeart 앱의 버전별 업데이트 내역입니다.",
}

interface ChangelogEntry {
  version: string
  date: string
  summary: string
  items: string[]
  latest?: boolean
}

const changelog: ChangelogEntry[] = [
  {
    version: "v2.0.0",
    date: "2026-07-24",
    summary:
      "사람별 관계를 더 깊이 볼 수 있도록 관계 시각화를 새로 만들고, 통계와 데이터 내보내기 기능을 추가했습니다.",
    items: [
      "관계별로 오고 간 정을 관찰자 시점으로 보여주는 균형 시각화 추가",
      "경조사가 몰리는 시기, 작년과의 비교 통계 추가",
      "기록을 CSV로 내보내는 기능 추가",
      "화면 디자인 전면 리뉴얼",
      "이전 버전 데이터는 자동으로 안전하게 이관됩니다",
    ],
    latest: true,
  },
  {
    version: "v1.1.0",
    date: "2026-01-18",
    summary:
      "홈 화면을 더 보기 쉽게 바꾸고, 지인 분류와 통계 기능을 추가했습니다.",
    items: [
      "홈에서 전체 · 받은 · 준 금액을 한눈에 확인",
      "지인 카테고리 & 필터로 원하는 사람만 보기",
      "지인 삭제 기능 추가",
      "다크 모드 지원",
      "최근 6개월 거래 흐름 & 카테고리별 통계 제공",
    ],
  },
  {
    version: "v1.0.0",
    date: "2025-11-27",
    summary: "CashHeart가 처음 출시되었습니다.",
    items: [
      "홈에서 전체 거래 금액 · 받은 돈 · 준 돈 요약 보기",
      "지인 카테고리 & 필터로 정리하기",
      "받은 돈 / 준 돈 자동 합산",
      "간단한 내역 추가 · 수정 · 삭제",
      "최근 6개월 거래 흐름 및 카테고리별 통계",
      "모든 데이터를 기기에만 저장하는 로컬 저장 기반",
    ],
  },
]

export default function UpdatesPage() {
  return (
    <PolicyLayout title="업데이트 내역">
      <div className="space-y-8">
        <p className="text-muted-foreground">
          CashHeart의 새로운 기능과 개선 사항을 버전별로 확인할 수 있습니다.
        </p>

        <div className="space-y-6">
          {changelog.map((entry) => (
            <section
              key={entry.version}
              className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {entry.version}
                </span>
                {entry.latest && (
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                    최신
                  </span>
                )}
                <time className="text-sm text-muted-foreground">{entry.date}</time>
              </div>

              <p className="mb-4 font-medium text-foreground">{entry.summary}</p>

              <ul className="space-y-2">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PolicyLayout>
  )
}
