import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CashHeart. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              문의:{" "}
              <a
                href="mailto:noveluslab@proton.me"
                className="text-primary hover:underline"
              >
                noveluslab@proton.me
              </a>
            </p>
          </div>
          <nav className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              개인정보 처리방침
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              이용 약관
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
