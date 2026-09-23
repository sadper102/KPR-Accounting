"use client";

import React from "react";
import Link from "next/link";
import {
  Calculator,
  Receipt,
  Building2,
  FileCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ElementType> = {
  accounting: Calculator,
  taxation: Receipt,
  registration: Building2,
  audit: FileCheck,
  payroll: Users,
  advisory: Users,
};

export default function ServicesPageContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge={t.services.badge}
        title={t.services.title}
        titleHighlight={t.services.titleHighlight}
        description={t.services.subtitle}
        breadcrumbs={[{ label: t.nav.services }]}
      />

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {t.services.list.map((service, index) => {
              const IconComp = ICON_MAP[service.id] || Calculator;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm hover:border-[#C5A059]/40 transition-all scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Service Header & Deliverables */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center shadow-xs">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-[#94670A] border border-amber-200 uppercase tracking-wider">
                          {service.highlight}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
                        {service.title}
                      </h2>

                      <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
                        {service.shortDesc}
                      </p>

                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                        <div className="text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-1">
                          {t.services.deliverablesLabel}
                        </div>
                        <div className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                          {service.deliverables}
                        </div>
                      </div>

                      <Button
                        href="/contact"
                        variant="navy"
                        size="md"
                        className="font-bold inline-flex items-center gap-2"
                      >
                        {t.services.quoteBtn} <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Right: Service Scope Details */}
                    <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]">
                      <h3 className="text-base font-bold text-[#0D2240] mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                        <span>{t.services.scopeTitle}</span>
                      </h3>

                      <ul className="space-y-3.5">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
              {t.services.trustTitle}
            </h2>
            <p className="text-[#334155] text-base max-w-2xl mx-auto mb-8">
              {t.services.trustSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.services.ctaTitle}
        subtitle={t.services.ctaSubtitle}
      />
    </div>
  );
}
