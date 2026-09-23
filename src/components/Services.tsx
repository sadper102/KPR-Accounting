"use client";

import React from "react";
import {
  Calculator,
  Receipt,
  Building2,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const ICON_MAP: Record<string, React.ElementType> = {
  accounting: Calculator,
  taxation: Receipt,
  registration: Building2,
  audit: FileCheck,
  advisory: Users,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
              {t.services.badge}
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6 leading-tight [text-wrap:balance]">
              {t.services.title} <span className="text-[#C5A059] whitespace-nowrap">{t.services.titleHighlight}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#334155] text-base sm:text-lg font-medium max-w-2xl mx-auto [text-wrap:balance]">
              {t.services.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Structured Solid Services Grid */}
        <div className="flex flex-wrap justify-center -mx-4">
          {t.services.list.map((srv, idx) => {
            const IconComponent = ICON_MAP[srv.id] || Calculator;

            return (
              <div key={srv.id} className="w-full md:w-1/2 lg:w-1/3 p-4 flex">
                <ScrollReveal direction="up" delay={0.1 * idx} className="w-full flex">
                  <GlassCard className="w-full h-full flex flex-col justify-between group relative border-[#E2E8F0] bg-white shadow-sm" accentTop>
                    
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] mb-5 group-hover:bg-[#0D2240] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Title & Short Desc */}
                      <h3 className="text-2xl font-bold text-[#0D2240] mb-3">
                        {srv.title}
                      </h3>
                      <p className="text-[#475569] text-sm mb-6 leading-relaxed font-normal">
                        {srv.shortDesc}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2.5 mb-8">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA link */}
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <a
                        href="#contact"
                        className="inline-flex items-center text-sm font-bold text-[#0D2240] hover:text-[#C5A059] transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>{t.services.quoteBtn}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                  </GlassCard>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* Bottom Harmonized Dark Banner */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 rounded-3xl p-8 sm:p-12 text-center bg-[#0D2240] text-white border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white leading-tight [text-wrap:balance]">
                {t.services.ctaTitle}
              </h3>
              <p className="text-[#E2E8F0] text-base sm:text-lg mb-8 font-normal leading-relaxed [text-wrap:balance]">
                {t.services.ctaSubtitle}
              </p>
              <Button href="#contact" variant="gold" size="lg" className="font-bold">
                {t.services.quoteBtn}
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
