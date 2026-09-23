"use client";

import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Workflow() {
  const { t } = useLanguage();

  return (
    <section id="workflow" className="py-24 relative bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
              {t.workflow.badge}
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6 leading-tight [text-wrap:balance]">
              {t.workflow.title} <span className="text-[#C5A059] whitespace-nowrap">{t.workflow.titleHighlight}</span> {t.workflow.titleEnd}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#334155] text-base sm:text-lg font-medium max-w-2xl mx-auto [text-wrap:balance]">
              {t.workflow.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {t.workflow.steps.map((wf, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="executive-card rounded-2xl p-8 bg-white border border-[#E2E8F0] shadow-xs h-full relative">
                
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-xs">
                  {wf.step}
                </div>

                <h3 className="text-xl font-bold text-[#0D2240] mb-3">
                  {wf.title}
                </h3>
                
                <p className="text-[#475569] text-sm leading-relaxed font-normal">
                  {wf.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
