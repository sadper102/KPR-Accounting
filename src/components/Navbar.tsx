"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.workflow, href: "/workflow" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white py-3 border-b border-slate-300 shadow-md"
          : "bg-white/95 py-4 border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Logo variant="full" theme="light" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-bold transition-all rounded-lg whitespace-nowrap ${
                    active
                      ? "text-[#0D2240] bg-[#C5A059]/15 border-b-2 border-[#C5A059]"
                      : "text-[#0A1628] hover:text-[#94670A] hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <LanguageSwitcher />

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-[#0A1628] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg border border-slate-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#94670A]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <Button href="/contact" variant="navy" size="sm" className="whitespace-nowrap">
              {t.nav.freeConsultBtn} <ArrowUpRight className="w-4 h-4 ml-1 inline" />
            </Button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0A1628] hover:bg-slate-100 transition-colors focus:outline-none border border-slate-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-slate-300 px-4 pt-4 pb-6 mt-3 shadow-2xl">
          {/* Mobile Language Selector Banner */}
          <div className="mb-4 pb-3 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.nav.home === "Home" ? "Language:" : "เลือกภาษา / Language:"}
            </span>
            <LanguageSwitcher />
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-bold rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between ${
                    active
                      ? "text-[#0D2240] bg-[#C5A059]/15 border-l-4 border-l-[#C5A059]"
                      : "text-[#0A1628] hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 text-sm font-bold text-[#0A1628] bg-slate-100 px-4 py-3 rounded-lg border border-slate-300"
              >
                <Phone className="w-4 h-4 text-[#94670A]" />
                <span>{t.nav.callUs} {SITE_CONFIG.phone}</span>
              </a>
              <Button
                href="/contact"
                variant="navy"
                size="md"
                className="w-full font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.freeConsultBtn}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
