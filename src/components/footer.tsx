import Image from "next/image";
import { Send, ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

const TELEGRAM_URL = "https://t.me/rbl_dev_bot";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Riverbase"
            width={26}
            height={26}
            className="rounded-lg object-contain"
          />
          <span className="text-sm font-semibold text-foreground">Riverbase</span>
          <span className="ml-1 text-[13px] text-muted-foreground/70">
            © 2026
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-4 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            <Send className="size-3.5" />
            Telegram
          </a>
          <a
            href={SIGNUP_URL}
            className="group inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-[13px] font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-px hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
