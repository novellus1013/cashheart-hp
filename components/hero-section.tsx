import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">
                경조사비 기록 · 관리
              </span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              주고받은 경조사비,
              <br />
              <span className="text-primary">한눈에 깔끔하게</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              결혼식, 돌잔치, 장례식, 생일, 졸업식...
              <br className="hidden md:block" />
              시간이 지나면 헷갈리는 경조사비 내역을
              <br className="hidden md:block" />
              사람별로 깔끔하게 정리해 드립니다.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#download"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              >
                지금 다운로드
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                앱 소개 보기
              </a>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative flex flex-1 justify-center lg:justify-end">
            <div className="flex items-end gap-4 md:gap-6">
              {/* Screenshot 1 */}
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <Image
                  src="/images/home.png"
                  alt="CashHeart 앱 홈 화면"
                  width={220}
                  height={440}
                  className="h-auto w-[160px] md:w-[200px]"
                  priority
                />
              </div>
              {/* Screenshot 2 - Main (center, taller) */}
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <Image
                  src="/images/detail.png"
                  alt="CashHeart 지인과의 거래 내역"
                  width={260}
                  height={520}
                  className="h-auto w-[180px] md:w-[240px]"
                  priority
                />
              </div>
              {/* Screenshot 3 */}
              <div className="hidden overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:block">
                <Image
                  src="/images/report.png"
                  alt="CashHeart 앱 통계 화면"
                  width={220}
                  height={440}
                  className="h-auto w-[160px] md:w-[200px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
    </section>
  )
}
