"use client";

import React from "react";
import { Award, Users, Lock } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const valueIcons = [Award, Users, Lock];
  const values = t.about.values.map((v, i) => ({
    icon: valueIcons[i] || Award,
    title: v.title,
    desc: v.desc,
  }));

  return (
    <section id="about" className="py-24 relative bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
              {t.about.badge}
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6 leading-tight [text-wrap:balance]">
              {t.about.title} <span className="text-[#C5A059] whitespace-nowrap">{t.about.titleHighlight}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#334155] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto [text-wrap:balance]">
              {t.about.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx + 0.2}>
                <GlassCard className="h-full flex flex-col justify-between border-[#E2E8F0] bg-white shadow-xs" accentTop>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] mb-5">
                      <IconComp className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D2240] mb-2">
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
  );
}
