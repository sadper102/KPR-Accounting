"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { PRICING_PACKAGES } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-slate-200/80 px-3.5 py-1.5 rounded-full border border-slate-300">
              PRICING PACKAGES — อัตราค่าบริการ
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2240] mt-4 mb-6">
              แพ็กเกจราคาโปร่งใส <span className="text-gold-gradient font-serif">ไม่มีค่าใช้จ่ายแอบแฝง</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 text-base sm:text-lg">
              เลือกแพ็กเกจที่เหมาะสมกับขนาดและขอบเขตธุรกิจของคุณ ตกลงค่างานชัดเจนล่วงหน้าก่อนเริ่มงาน
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div
                className={`executive-card rounded-2xl p-8 flex flex-col justify-between h-full relative ${
                  pkg.popular
                    ? "border-2 border-[#0D2240] shadow-xl bg-white scale-105 z-10"
                    : "bg-white border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D2240] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    แพ็กเกจยอดนิยม
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#0D2240] mb-2 font-serif">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-500 text-xs mb-6 min-h-[36px]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl font-extrabold text-[#0D2240] font-serif">
                      {pkg.price}
                    </span>
                    <span className="text-slate-500 text-xs ml-2 font-medium">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href="#contact"
                  variant={pkg.popular ? "navy" : "outline"}
                  size="md"
                  className="w-full"
                >
                  {pkg.ctaText} <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
