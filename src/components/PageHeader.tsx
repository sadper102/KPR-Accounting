"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

import { useLanguage } from "@/context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 lg:pb-20 bg-[#0D2240] text-white overflow-hidden border-b-2 border-[#C5A059]">
      {/* Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{t.nav.home}</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C5A059] font-medium">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge */}
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-wider uppercase mb-4">
            {badge}
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {title} {titleHighlight && <span className="text-[#C5A059]">{titleHighlight}</span>}
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
