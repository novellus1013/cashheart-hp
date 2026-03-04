import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type EmailType = "support" | "contact"

const EMAIL_MAP: Record<EmailType, string> = {
  support: "support@novelus.dev",
  contact: "contact@novelus.dev",
}

export function getEmailUrl(type: "support" | "contact", appName: string, locale: string): string {
  const isKorean = locale.startsWith("ko")
  const email = EMAIL_MAP[type]
  const label = type === "support" ? "Support" : "Contact"

  const subject = `${label} Email For ${appName}`
  const body = isKorean
    ? `이 글은 ${appName} ${label} 팀에게 전달됩니다.\n가능한 빠르게 답변드리도록 하겠습니다.\n아래에 원하시는 내용을 적어주세요.\n\n`
    : `This message will be forwarded to the ${appName} ${label} team.\nWe will respond as soon as possible.\nPlease write your inquiry below.\n\n`

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// getEmailUrl을 내부에서 호출
export function openEmail(type: "support" | "contact", appName: string, locale: string): void {
  window.location.href = getEmailUrl(type, appName, locale)
}