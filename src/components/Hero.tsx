"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scale, CheckCircle2, Award } from "lucide-react";
import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-36 pb-20 flex items-center bg-[#F8FAFC] overflow-hidden">
      
      {/* Crisp Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Accreditation Badge */}
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-[#0D2240] text-xs sm:text-sm font-bold mb-6 shadow-sm">
                <ShieldCheck className="w-4.5 h-4.5 text-[#9A7B39]" />
                <span>สำนักงานบัญชีและกฎหมายวิชาชีพ (CPA & Lawyer)</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight lg:leading-tight text-[#0D2240] mb-6">
                ยึดมั่นความถูกต้อง <br />
                <span className="text-[#9A7B39] font-serif">การบัญชีและกฎหมาย</span> <br />
                เพื่อความมั่นคงของธุรกิจคุณ
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-slate-900 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-medium">
                {SITE_CONFIG.description} ป้องกันความเสี่ยงทางภาษีและคดีความธุรกิจอย่างตรงไปตรงมา
              </p>
            </ScrollReveal>

            {/* Credential Pills */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-10 text-xs sm:text-sm text-slate-900 font-bold">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#9A7B39] shrink-0" />
                  <span>{SITE_CONFIG.cpaLicense}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#9A7B39] shrink-0" />
                  <span>สภาทนายความแห่งประเทศไทย</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button href="#contact" variant="navy" size="lg">
                  ขอคำปรึกษาเบื้องต้นฟรี <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
                <Button href="#pricing" variant="outline" size="lg">
                  ดูอัตราค่าบริการ
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Executive Frame */}
                <div className="relative executive-card rounded-2xl overflow-hidden p-3 border border-slate-300 bg-white shadow-lg">
                  <div className="relative h-[380px] sm:h-[440px] w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt="KPR Accounting Office"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2240]/90 via-[#0D2240]/20 to-transparent" />

                    {/* Badge inside image */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 border border-slate-200 shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0D2240] flex items-center justify-center text-[#C5A059] shrink-0 font-bold">
                          <Scale className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[#9A7B39] text-xs font-extrabold uppercase tracking-wider">
                            KPR ACCOUNTING
                          </div>
                          <div className="text-[#0D2240] text-sm sm:text-base font-extrabold font-serif">
                            เคพีอาร์ แอคเคาท์ติ้ง
                          </div>
                          <div className="text-slate-800 text-xs mt-0.5 font-semibold">
                            ที่ปรึกษาบัญชีและกฎหมายครบวงจร
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -top-5 -left-5 bg-white rounded-xl p-4 border border-slate-300 shadow-xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-[#9A7B39]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#0D2240] font-extrabold text-sm">ประสบการณ์ 15+ ปี</div>
                    <div className="text-slate-800 text-xs font-semibold">ถูกต้องตามกฎหมาย 100%</div>
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
