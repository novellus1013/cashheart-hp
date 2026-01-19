"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

// Placeholder for future reviews
const reviews: Review[] = []

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }
  }

  const prevReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }
  }

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            사용자 리뷰
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            CashHeart를 사용하고 계신 분들의 이야기
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {reviews.length > 0 ? (
            <>
              {/* Review Card */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < reviews[currentIndex].rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                        }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-lg text-foreground">
                  {`"${reviews[currentIndex].comment}"`}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {reviews[currentIndex].name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {reviews[currentIndex].date}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevReview}
                  aria-label="이전 리뷰"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {reviews.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextReview}
                  aria-label="다음 리뷰"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            /* Coming Soon State */
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm text-center">
              <div className="mb-4 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-muted text-muted"
                  />
                ))}
              </div>
              <p className="mb-4 text-lg text-muted-foreground italic">
                {`“CashHeart에 대한 첫 후기를 남겨주세요!”`}
              </p>
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-medium text-primary">Coming Soon</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
