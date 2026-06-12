import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Landmark, Key, BarChart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden">
      {/* ── Background: single subtle radial gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, oklch(0.93 0.03 165) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center flex flex-col items-center">
        {/* Announcement Badge */}
        <div 
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>The Commerce Platform for Cambodia</span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight text-foreground leading-[1.05] opacity-0 animate-fade-in-up max-w-4xl"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          Launch your online store <br />
          <span className="gradient-text">in minutes</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground font-normal opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          Create, manage, and grow your business with the all-in-one e-commerce platform 
          built for Cambodian merchants. Secure, bank-integrated, and optimized for local commerce.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex items-center justify-center gap-3.5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
        >
          <a
            href="https://riverbase.app/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 text-sm font-semibold rounded-lg cursor-pointer shadow-lg shadow-primary/20 inline-flex items-center justify-center transition-colors"
          >
            Start for Free
          </a>
          <a
            href="https://thith.riverbase.org/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 h-11 px-6 text-sm font-semibold cursor-pointer border border-border/80 inline-flex items-center justify-center rounded-lg transition-colors"
          >
            Explore Demo Store
            <ArrowRight className="size-4 ml-1" />
          </a>
        </div>

        {/* Note */}
        <p
          className="mt-6 text-[13px] text-muted-foreground/60 tracking-wide opacity-0 animate-fade-in-up"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          KHQR Integrated · Bakong Payment System Compatible
        </p>

        {/* Mockup Viewport Container */}
        <div
          className="mt-16 w-full max-w-4xl rounded-xl border border-border/60 bg-card shadow-2xl overflow-hidden opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          {/* Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/30">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 block" />
              <span className="w-3 h-3 rounded-full bg-green-400/80 block" />
            </div>
            <div className="h-6 w-72 rounded bg-background border border-border/40 text-[11px] text-muted-foreground/50 flex items-center justify-center font-mono select-none">
              riverbase.io/dashboard/reconciliation
            </div>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* Browser Content (Mock Dashboard Layout) */}
          <div className="flex h-[320px] md:h-[400px] text-left text-xs bg-background">
            {/* Sidebar */}
            <div className="w-40 border-r border-border/60 p-4 hidden md:flex flex-col gap-4 bg-card">
              <div className="h-4 w-16 bg-muted rounded mb-2 opacity-50" />
              <div className="flex flex-col gap-2">
                <div className="h-7 bg-primary/10 border-l-2 border-primary text-primary rounded px-2.5 flex items-center font-medium">
                  <BarChart className="size-3.5 mr-2" /> Overview
                </div>
                <div className="h-7 text-muted-foreground/80 hover:text-foreground rounded px-2.5 flex items-center cursor-pointer transition-colors">
                  <Landmark className="size-3.5 mr-2" /> Bank Feeds
                </div>
                <div className="h-7 text-muted-foreground/80 hover:text-foreground rounded px-2.5 flex items-center cursor-pointer transition-colors">
                  <ShieldCheck className="size-3.5 mr-2" /> B2B Credit
                </div>
                <div className="h-7 text-muted-foreground/80 hover:text-foreground rounded px-2.5 flex items-center cursor-pointer transition-colors">
                  <Key className="size-3.5 mr-2" /> Audit &amp; Logs
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
              {/* Top Row Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-border/60 rounded-lg p-4 bg-card flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Reconciled Deposits</span>
                  <span className="text-xl font-bold text-foreground">$142,500.00</span>
                  <span className="text-[10px] text-primary font-medium mt-1">▲ +12.5% automated</span>
                </div>
                <div className="border border-border/60 rounded-lg p-4 bg-card flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">B2B Credit Utilized</span>
                  <span className="text-xl font-bold text-foreground">$84,200.00 <span className="text-xs font-normal text-muted-foreground">/ $150K</span></span>
                  <span className="text-[10px] text-primary font-medium mt-1">56% credit line load</span>
                </div>
                <div className="border border-border/60 rounded-lg p-4 bg-card flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Bakong &amp; KHQR Nodes</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block" />
                    <span className="text-sm font-semibold text-foreground">Operational</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1">AES-256 Encrypted feeds</span>
                </div>
              </div>

              {/* Chart & Activities Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-[120px]">
                {/* SVG mock sales line chart */}
                <div className="border border-border/60 rounded-lg p-4 bg-card flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Reconciled Cash Flow</span>
                    <span className="text-[10px] text-muted-foreground">7 Days Activity</span>
                  </div>
                  <div className="flex-1 flex items-end justify-between h-20 w-full pt-4 relative">
                    {/* SVG Line */}
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path
                        d="M 0 80 Q 20 40 40 60 T 80 20 T 100 30"
                        fill="none"
                        stroke="oklch(0.42 0.08 165)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Area Fill */}
                      <path
                        d="M 0 80 Q 20 40 40 60 T 80 20 T 100 30 L 100 100 L 0 100 Z"
                        fill="url(#gradient)"
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.42 0.08 165)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="text-[9px] text-muted-foreground/60 w-full flex justify-between absolute bottom-[-16px]">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>

                {/* Recent activity list */}
                <div className="border border-border/60 rounded-lg p-4 bg-card flex flex-col">
                  <span className="font-semibold text-foreground mb-3">Recent Transactions</span>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-[10px]">AD</span>
                        <div className="flex flex-col">
                          <span className="font-medium">Apex Distributors</span>
                          <span className="text-[10px] text-muted-foreground">ABA Bank Transfer (Reconciled)</span>
                        </div>
                      </div>
                      <span className="font-semibold text-emerald-600">+$12,500.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-[10px]">PP</span>
                        <div className="flex flex-col">
                          <span className="font-medium">Phnom Penh Retail</span>
                          <span className="text-[10px] text-muted-foreground">Bakong KHQR Pay (Reconciled)</span>
                        </div>
                      </div>
                      <span className="font-semibold text-emerald-600">+$4,250.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-[10px]">AL</span>
                        <div className="flex flex-col">
                          <span className="font-medium">Angkor Logistics Co</span>
                          <span className="text-[10px] text-muted-foreground">Invoice Generated (Net-30)</span>
                        </div>
                      </div>
                      <span className="font-semibold text-foreground/70">+$8,900.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Trust Bar */}
        <div 
          className="mt-16 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-0 animate-fade-in-up border-y border-border/40 py-6"
          style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
        >
          <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.18em] uppercase">KHQR INTEGRATED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 hidden sm:inline" />
          <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.18em] uppercase">BAKONG NETWORKS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 hidden sm:inline" />
          <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.18em] uppercase">AUTOMATED BANK RECONCILIATION</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 hidden sm:inline" />
          <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.18em] uppercase">SOC2 TYPE II SECURE</span>
        </div>
      </div>

      {/* ── Bottom divider line ── */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <div className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
