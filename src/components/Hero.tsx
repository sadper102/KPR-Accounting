"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[85vh] pt-36 sm:pt-40 lg:pt-44 pb-20 flex items-center bg-[#F8FAFC] overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Accreditation Badge */}
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-[#0D2240] text-xs sm:text-sm font-bold mb-6 shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <span>{t.hero.badge}</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight lg:leading-tight text-[#0D2240] mb-6">
                {t.hero.title} <span className="text-[#C5A059]">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button href="#contact" variant="navy" size="lg" className="font-bold">
                  {t.hero.ctaConsult} <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
                <Button href="#pricing" variant="outline" size="lg" className="font-bold">
                  {t.hero.ctaPricing}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Executive Frame */}
                <div className="relative executive-card rounded-2xl overflow-hidden p-3 border border-slate-300 bg-white shadow-xl">
                  <div className="relative h-[380px] sm:h-[460px] lg:h-[480px] w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt="KPR Accounting & Legal Advisors"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2240]/80 via-black/10 to-transparent pointer-events-none" />

                    {/* Badge inside image */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl p-4 border border-slate-300 shadow-xl">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#0D2240] flex items-center justify-center text-[#C5A059] shrink-0 font-bold">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                            {t.hero.badgeTitle}
                          </div>
                          <div className="text-[#0D2240] text-sm sm:text-base font-extrabold">
                            {t.hero.badgeThaiTitle}
                          </div>
                          <div className="text-[#475569] text-xs mt-0.5 font-medium">
                            {t.hero.badgeSub}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 border border-slate-300 shadow-xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#0D2240] font-extrabold text-sm">{t.hero.statExp}</div>
                    {t.hero.statLegal && (
                      <div className="text-[#475569] text-xs font-medium">{t.hero.statLegal}</div>
                    )}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
