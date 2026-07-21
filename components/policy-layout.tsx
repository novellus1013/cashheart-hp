"use client"

import React from "react"

import { Footer } from "@/components/footer"

interface PolicyLayoutProps {
  title: string
  children: React.ReactNode
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
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
