"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Ambient background glow & radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium mb-6 gold-glow">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>สำนักงานบัญชีและกฎหมายระดับมืออาชีพ</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight mb-6">
                มุ่งมั่นบริการด้าน <br />
                <span className="text-gold-gradient font-serif">การบัญชีและกฎหมาย</span> <br />
                ด้วยความเป็นมืออาชีพ
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-light">
                {SITE_CONFIG.description} ให้คุณบริหารธุรกิจได้อย่างมั่นใจ ปลอดภัยจากความเสี่ยงทางภาษีและข้อกฎหมาย
              </p>
            </ScrollReveal>

            {/* Quick Benefits Pills */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-10 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2 bg-slate-900/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>ผู้สอบบัญชี CPA / TA</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>ทนายความตั๋วปี</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>ให้คำปรึกษาฟรี</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button href="#contact" variant="gold" size="lg">
                  ปรึกษาเราตอนนี้ <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  ดูบริการทั้งหมด
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C5A059] via-amber-200/20 to-[#9A7B39] rounded-3xl blur-sm opacity-60" />

                <div className="relative glass-panel rounded-2xl overflow-hidden p-3 border border-amber-500/30">
                  <div className="relative h-[380px] sm:h-[450px] w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt="KPR Accounting Office"
                      fill
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    {/* Overlay badge inside image */}
                    <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4 border border-amber-500/30 backdrop-blur-md">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-slate-950 shrink-0 font-bold">
                          <Scale className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                            KPR ACCOUNTING
                          </div>
                          <div className="text-white text-sm sm:text-base font-bold font-serif">
                            เคพีอาร์ แอคเคาท์ติ้ง
                          </div>
                          <div className="text-slate-300 text-xs mt-0.5">
                            ที่ปรึกษาบัญชีและกฎหมายครบวงจร
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -top-6 -left-6 glass-panel rounded-2xl p-4 border border-amber-500/30 shadow-2xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">100% Correct</div>
                    <div className="text-slate-400 text-xs">ถูกต้องตามกฎหมาย</div>
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
