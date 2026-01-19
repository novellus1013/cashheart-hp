import Image from "next/image"

export function DownloadSection() {
  return (
    <section id="download" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            지금 바로 다운로드하세요
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            기억에 의존하던 경조사 관리, 이제 CashHeart로 간편하게 해결하세요.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=co.novelus.cashheart"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/play-store.png"
                alt="Google Play에서 다운로드"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/kr/app/cashheart-%EA%B2%BD%EC%A1%B0%EC%82%AC%EB%B9%84-%EA%B8%B0%EB%A1%9D-%EA%B4%80%EB%A6%AC/id6755832129"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/app-store.png"
                alt="App Store에서 다운로드"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
