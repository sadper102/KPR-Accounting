"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3 shadow-xl shadow-black/40" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center group">
            <Logo variant="full" theme="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#C5A059] transition-colors rounded-md hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#C5A059] transition-colors bg-slate-900/60 px-3 py-2 rounded-lg border border-amber-500/20"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <Button href="#contact" variant="gold" size="sm">
              ปรึกษาฟรี <ArrowUpRight className="w-4 h-4 ml-1 inline" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-slate-200 hover:text-[#C5A059] hover:bg-slate-800/60 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-[#C5A059] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 px-4 py-3 rounded-lg border border-amber-500/20"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>โทร {SITE_CONFIG.phone}</span>
              </a>
              <Button
                href="#contact"
                variant="gold"
                size="md"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ปรึกษาฟรีทันที
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
