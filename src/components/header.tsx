"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
  { label: "Demo Store", href: "https://thith.riverbase.org/en", external: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Riverbase Logo"
              width={32}
              height={32}
              className="rounded-lg object-contain"
              priority
            />
            <span className="text-lg font-semibold text-foreground">
              Riverbase
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[13px] font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://riverbase.app/"
              className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 font-medium text-sm h-9 px-4 rounded-lg cursor-pointer transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-[4px]"
                  : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground/70 transition-all duration-200 ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-[4px]"
                  : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-lg font-medium text-foreground/60 hover:text-foreground transition-all duration-200 ${
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
            href="https://riverbase.app/"
            className={`mt-4 inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 font-medium text-sm h-10 px-6 rounded-lg cursor-pointer transition-all duration-200 ${
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
    </header>
  );
}
