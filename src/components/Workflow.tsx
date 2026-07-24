"use client";

import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { WORKFLOW_STEPS } from "@/lib/constants";

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
              WORKFLOW — ขั้นตอนการทำงาน
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2240] mt-4 mb-6">
              กระบวนการทำงานที่เป็นระบบ <span className="text-gold-gradient font-serif">3 ขั้นตอน</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 text-base sm:text-lg">
              ชัดเจน โปร่งใส ตรวจสอบได้ในทุกขั้นตอน เพื่อให้ท่านมั่นใจในความถูกต้องทางการเงินและกฎหมาย
            </p>
          </ScrollReveal>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {WORKFLOW_STEPS.map((wf, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="executive-card rounded-2xl p-8 bg-white border border-slate-200 h-full relative">
                
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-white font-bold text-lg font-serif flex items-center justify-center mb-6 shadow-md">
                  {wf.step}
                </div>

                <h3 className="text-xl font-bold text-[#0D2240] mb-3 font-serif">
                  {wf.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
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
