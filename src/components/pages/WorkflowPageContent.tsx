"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Lock,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkflowPageContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge={t.workflow.badge}
        title={t.workflow.title}
        titleHighlight={t.workflow.titleHighlight}
        description={t.workflow.subtitle}
        breadcrumbs={[{ label: t.nav.workflow }]}
      />

      {/* 3-Step Detailed Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-4">
              {t.workflow.stepsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2240] mb-4">
              {t.workflow.stepsHeading}
            </h2>
            <p className="text-[#334155] text-base leading-relaxed">
              {t.workflow.stepsSub}
            </p>
          </div>

          <div className="space-y-12">
            {t.workflow.steps.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-xs relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  
                  {/* Step Badge & Title */}
                  <div className="lg:w-1/3">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D2240] text-[#C5A059] font-black text-2xl flex items-center justify-center mb-6 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2240] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#475569] text-base leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Points Details */}
                  <div className="lg:w-2/3 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs w-full">
                    <h4 className="text-sm font-bold text-[#0D2240] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-[#C5A059]" />
                      <span>{t.workflow.activitiesTitle}</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Tax Filing Calendar */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              {t.workflow.timelineBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              {t.workflow.timelineTitle}
            </h2>
            <p className="text-[#334155] text-sm sm:text-base">
              {t.workflow.timelineSub}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm divide-y divide-[#E2E8F0] overflow-hidden">
            {t.workflow.taxCalendar.map((cal, cIdx) => (
              <div
                key={cIdx}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0D2240] shrink-0">
                    <Calendar className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#0D2240]">
                      {cal.type}
                    </div>
                    <div className="text-sm text-[#475569] leading-relaxed">
                      {cal.desc}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3.5 py-1.5 rounded-lg bg-amber-50 text-[#94670A] font-bold text-xs sm:text-sm border border-amber-200">
                    {cal.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Confidentiality */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mx-auto mb-6 shadow-md">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
            {t.workflow.securityTitle}
          </h2>
          <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
            {t.workflow.securityDesc}
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.workflow.ctaTitle}
        subtitle={t.workflow.ctaSubtitle}
      />
    </div>
  );
}
