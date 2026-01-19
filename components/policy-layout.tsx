"use client"

import React from "react"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

interface PolicyLayoutProps {
  title: string
  children: React.ReactNode
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Back Button Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 md:px-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>이전 페이지</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h1>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
