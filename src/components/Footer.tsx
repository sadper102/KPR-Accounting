"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.workflow, href: "/workflow" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0D2240] text-white pt-16 pb-12 overflow-hidden border-t-2 border-[#C5A059]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="full" theme="dark" size="lg" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal max-w-sm">
              {t.footer.desc}
            </p>
            <div className="space-y-2">
              <a
                href="https://tfac.or.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-[#C5A059] font-medium block transition-colors"
                title="ไปยังเว็บไซต์สภาวิชาชีพบัญชี ในพระบรมราชูปถัมภ์"
              >
                {t.footer.tfacMember}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              {t.footer.mainServices}
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300">
              {t.services.list.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{lang === "th" ? SITE_CONFIG.address : "735/1 Building A, Room A147-148, 1st Fl., Srinakarin Rd., Phatthanakan, Suan Luang, Bangkok 10250"}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#C5A059]">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#C5A059]">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-300">
          <div>
            © {new Date().getFullYear()}{" "}
            {lang === "th" ? SITE_CONFIG.companyName : SITE_CONFIG.companyNameEn}
            . All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-[#C5A059] bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
