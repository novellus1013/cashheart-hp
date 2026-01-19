import { Check } from "lucide-react"

const targetUsers = [
  "경조사비를 정확하게 관리하고 싶은 분",
  "받은 돈/준 돈 정산이 헷갈리는 분",
  "사람별로 내역을 따로 정리하고 싶은 분",
  "카테고리별로 깔끔하게 분류해서 보고 싶은 분",
  "간단한 조작으로 오래 보관되는 기록 앱을 찾는 분",
]

export function TargetUsersSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              이런 분들께 추천해요
            </h2>
            <ul className="space-y-4">
              {targetUsers.map((user) => (
                <li key={user} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{user}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="text-center">
                <p className="mb-2 text-6xl font-bold text-primary">100%</p>
                <p className="text-lg font-medium text-foreground">로컬 저장</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  외부 서버 전송 없이
                  <br />
                  내 기기에만 안전하게 보관
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
