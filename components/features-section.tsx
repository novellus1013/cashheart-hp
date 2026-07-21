import { Home, Users, Scale, Calculator, Plus, BarChart3, FileDown, Smartphone, Moon } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "홈에서 한눈에 요약 보기",
    description:
      "전체 거래 금액, 받은 돈 합계, 준 돈 합계를 홈 화면에서 바로 확인할 수 있습니다.",
  },
  {
    icon: Users,
    title: "지인 카테고리 & 필터",
    description:
      "지인을 카테고리로 나누어 관리하고, 필터를 통해 원하는 사람만 골라서 볼 수 있습니다.",
  },
  {
    icon: Scale,
    title: "관계별로 오고 간 정 확인",
    description:
      "사람마다 받은 마음과 보낸 마음이 어느 쪽으로 얼마나 기울어 있는지 관찰자 시점으로 보여드려요.",
  },
  {
    icon: Calculator,
    title: "받은 돈 / 준 돈 자동 합산",
    description:
      "사람별로 주고받은 금액이 자동으로 합산되어 전체 금액과 각각의 합계를 즉시 확인할 수 있습니다.",
  },
  {
    icon: Plus,
    title: "간단한 내역 추가 · 수정 · 삭제",
    description:
      "금액, 날짜, 종류, 메모만 입력하면 끝! 바쁜 자리에서도 빠르게 기록할 수 있습니다.",
  },
  {
    icon: BarChart3,
    title: "통계로 한 번 더 정리",
    description:
      "최근 6개월 거래 흐름과 카테고리별 분포는 물론, 경조사가 몰리는 시기와 작년 같은 기간과의 비교까지 확인할 수 있어요.",
  },
  {
    icon: FileDown,
    title: "기록은 CSV로 내보내기",
    description: "쌓인 기록을 CSV로 내보내 엑셀 등에서 다시 활용할 수 있습니다.",
  },
  {
    icon: Smartphone,
    title: "로컬 저장 기반",
    description:
      "모든 데이터를 사용자의 기기에만 저장합니다. 인터넷 없이도 기록을 열람하고 추가할 수 있습니다.",
  },
  {
    icon: Moon,
    title: "다크모드 지원",
    description: "화면 테마를 자동 · 라이트 · 다크 중에서 선택할 수 있어요.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            CashHeart 주요 기능
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            복잡한 계산 없이 입력만 하면 자동으로 합산되어 받은 금액 · 준 금액 ·
            전체 금액을 명확하게 확인할 수 있어요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
