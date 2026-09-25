"use client";

import React from "react";
import {
  Award,
  Users,
  Lock,
  Building2,
  CheckCircle2,
  Target,
  Compass,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPageContent() {
  const { t, lang } = useLanguage();

  const valueIcons = [Award, Users, Lock];
  const values = t.about.values.map((v, i) => ({
    icon: valueIcons[i] || Award,
    title: v.title,
    desc: v.desc,
  }));

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge={t.about.badge}
        title={t.about.title}
        titleHighlight={t.about.titleHighlight}
        description={t.about.subtitle}
        breadcrumbs={[{ label: t.nav.about }]}
      />

      {/* Company Story & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="down">
                <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-4">
                  {t.about.profileBadge}
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2240] mb-6 leading-tight">
                  {t.about.profileTitle}
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="space-y-4 text-[#334155] text-base leading-relaxed">
                  <p>
                    <strong className="text-[#0D2240] font-bold">
                      {lang === "th" ? `${SITE_CONFIG.companyName} (${SITE_CONFIG.name})` : "KPR Accounting Co., Ltd."}
                    </strong>{" "}
                    {t.about.profileP1}
                  </p>
                  <p>{t.about.profileP2}</p>
                  <p>{t.about.profileP3}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Corporate Registration Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="executive-card p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0D2240] mb-6 border-b border-[#E2E8F0] pb-4">
                    {t.about.profileBadge}
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block mb-1">
                        {t.about.addressLabel}
                      </span>
                      <p className="text-[#334155] leading-relaxed">
                        {lang === "th" ? SITE_CONFIG.address : "735/1 Building A, Room A147-148, 1st Fl., Srinakarin Rd., Phatthanakan, Suan Luang, Bangkok 10250"}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block mb-1">
                        {t.about.phoneLabel}
                      </span>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-[#0D2240] font-bold hover:text-[#C5A059] transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <ScrollReveal direction="up" delay={0.1}>
              <GlassCard className="p-8 h-full bg-white border-[#E2E8F0] shadow-xs" accentTop>
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2240] mb-4">
                  {t.about.visionTitle}
                </h3>
                <p className="text-[#334155] text-base leading-relaxed font-normal">
                  {t.about.visionDesc}
                </p>
              </GlassCard>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="up" delay={0.2}>
              <GlassCard className="p-8 h-full bg-white border-[#E2E8F0] shadow-xs" accentTop>
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2240] mb-4">
                  {t.about.missionTitle}
                </h3>
                <ul className="space-y-3 text-[#334155] text-sm font-medium">
                  {t.about.missionPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Core Values / 3 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="down">
              <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
                CORE VALUES
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2240] mb-4">
                {t.about.corePillarsTitle}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#475569] text-base font-normal">
                {t.about.corePillarsDesc}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx + 0.2}>
                  <GlassCard className="h-full flex flex-col justify-between border-[#E2E8F0] bg-white shadow-xs" accentTop>
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] mb-5">
                        <IconComp className="w-6 h-6 text-[#C5A059]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0D2240] mb-2">
                        {val.title}
                      </h3>
                      <p className="text-[#475569] text-sm leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
