"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CashHeart 로고"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground">CashHeart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground"
          >
            홈
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-foreground"
          >
            앱 소개
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("download")}
            className="text-muted-foreground hover:text-foreground"
          >
            다운로드
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              홈
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              앱 소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("download")}
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              다운로드
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
