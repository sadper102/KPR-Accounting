"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Layers,
  ShieldCheck,
  MessageSquareHeart,
  Lock,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import { WHY_US } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Layers,
  ShieldCheck,
  MessageSquareHeart,
  Lock,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Why Choose Us List */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="down">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                WHY CHOOSE US — ทำไมต้องเลือกเรา
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                ทำไมองค์กรชั้นนำถึงเจาะจงเลือก <br />
                <span className="text-gold-gradient font-serif">KPR ACCOUNTING</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-slate-300 text-base sm:text-lg mb-10">
                เราเข้าใจถึงความสำคัญของความถูกต้องทางการเงินและความปลอดภัยทางกฎหมายในธุรกิจของคุณ
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {WHY_US.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
                return (
                  <ScrollReveal key={idx} direction="up" delay={0.1 * idx + 0.2}>
                    <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 font-serif">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Box with Highlight Cards */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative">
                <div className="glass-panel rounded-3xl p-8 border border-amber-500/30 gold-glow relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                  <h3 className="text-2xl font-bold text-white mb-6 font-serif border-b border-slate-800 pb-4">
                    คำมั่นสัญญาจากเรา
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-slate-950 font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1">ส่งงานตรงเวลา 100%</h4>
                        <p className="text-slate-300 text-xs">ยื่นภาษีและปิดงบตามกำหนดเวลา ไม่โดนค่าปรับหรือเบี้ยปรับ</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-slate-950 font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1">สื่อสารชัดเจน ทราบค่างานล่วงหน้า</h4>
                        <p className="text-slate-300 text-xs">ไม่มีค่าใช้จ่ายซ่อนเร้น ตกลงขอบเขตงานชัดเจนก่อนเริ่มงาน</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-slate-950 font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1">พร้อมเคียงข้างเมื่อโดนตรวจสอบ</h4>
                        <p className="text-slate-300 text-xs">มีนักบัญชีและทนายพร้อมเข้าพบเจ้าหน้าที่สรรพากรแทนท่าน</p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="text-white text-xs font-bold">ขึ้นทะเบียนสภาวิชาชีพบัญชี</div>
                        <div className="text-slate-400 text-[10px]">และสภาทนายความแห่งประเทศไทย</div>
                      </div>
                    </div>
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
