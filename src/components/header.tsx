"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SIGNUP_URL, DEMO_URL } from "@/lib/links";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Stores", href: "#stores" },
  { label: "Partners", href: "#partners" },
  { label: "Demo Store", href: DEMO_URL, external: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sticky bar: always visible; only the shadow reacts to scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section owns the viewport.
  useEffect(() => {
    const ids = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Hug bar: full-width flat panel matching the page-body color,
            blur(20px), borderless for a clean seam with the fillets. */}
        <div
          className={`bg-background/80 backdrop-blur-[20px] transition-shadow duration-200 ${
            scrolled || mobileMenuOpen
              ? "shadow-sm shadow-foreground/[0.05]"
              : ""
          }`}
        >
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8">
            {/* Brand — icon + two-line block (name over descriptor) */}
            <a
              href="#"
              className="flex shrink-0 items-center gap-2.5 md:justify-self-start"
            >
              <Image
                src="/logo.png"
                alt="Riverbase"
                width={32}
                height={32}
                className="rounded-lg object-contain"
                priority
              />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold tracking-tight text-foreground">
                  Riverbase
                </span>
                <span className="mt-1 text-[11px] font-medium tracking-tight text-muted-foreground">
                  Commerce platform
                </span>
              </span>
            </a>

            {/* Center nav */}
            <nav className="hidden items-center gap-0.5 md:flex md:justify-self-center">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-foreground/[0.06] text-foreground"
                        : "text-foreground/55 hover:bg-foreground/[0.04] hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA */}
            <a
              href={SIGNUP_URL}
              className="hidden h-9 items-center justify-center rounded-lg bg-primary px-4 text-[13px] font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all duration-150 hover:-translate-y-px hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 md:inline-flex md:justify-self-end"
            >
              Get Started
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                  mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                  mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Hug fillets — the bar's color curving into the page below */}
        <div aria-hidden className="hug-fillet hug-fillet-left" />
        <div aria-hidden className="hug-fillet hug-fillet-right" />
      </header>

      {/* Mobile menu overlay — keep as a sibling of <header>: any transform
          on the header would become this fixed layer's containing block. */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="relative flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-lg font-medium text-foreground/60 transition-all duration-200 hover:text-foreground ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all duration-200 hover:bg-primary/90 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: mobileMenuOpen
                ? `${navLinks.length * 50}ms`
                : "0ms",
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
