"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "pill" | "compact";
}

export default function LanguageSwitcher({
  className = "",
  variant = "pill",
}: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  if (variant === "compact") {
    return (
      <div
        className={`inline-flex items-center rounded-lg border border-slate-300 bg-slate-100 p-0.5 text-xs font-semibold ${className}`}
      >
        <button
          type="button"
          onClick={() => setLang("th")}
          className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all ${
            lang === "th"
              ? "bg-[#0D2240] text-white shadow-sm font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
          aria-label="เปลี่ยนเป็นภาษาไทย"
        >
          <span>🇹🇭</span>
          <span>TH</span>
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all ${
            lang === "en"
              ? "bg-[#0D2240] text-white shadow-sm font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
          aria-label="Switch to English"
        >
          <span>🇬🇧</span>
          <span>EN</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border-2 border-slate-200 bg-slate-50 p-1 shadow-sm hover:border-[#C5A059]/50 transition-all ${className}`}
    >
      <div className="flex items-center pl-2 pr-1 text-slate-400">
        <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
      </div>
      <button
        type="button"
        onClick={() => setLang("th")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
          lang === "th"
            ? "bg-[#0D2240] text-white shadow-sm ring-1 ring-[#0D2240]"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
        }`}
        aria-label="เปลี่ยนเป็นภาษาไทย"
      >
        <span>🇹🇭</span>
        <span>ไทย</span>
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
          lang === "en"
            ? "bg-[#0D2240] text-white shadow-sm ring-1 ring-[#0D2240]"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
        }`}
        aria-label="Switch to English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
