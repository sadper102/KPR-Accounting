"use client";

import React from "react";
import {
  Award,
  Layers,
  ShieldCheck,
  MessageSquareHeart,
  Lock,
} from "lucide-react";
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
    <section id="why-us" className="py-24 relative bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Features */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="down">
              <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
                WHY CHOOSE US — ทำไมต้องเลือกเรา
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6">
                ทำไมองค์กรชั้นนำถึงเจาะจงเลือก <span className="text-[#C5A059]">KPR ACCOUNTING</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#334155] text-base sm:text-lg mb-10 font-medium">
                เราเข้าใจถึงความสำคัญของความถูกต้องทางการเงินและความคุ้มครองทางกฎหมายในทุกก้าวของธุรกิจคุณ
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {WHY_US.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
                return (
                  <ScrollReveal key={idx} direction="up" delay={0.1 * idx + 0.2}>
                    <div className="executive-card p-5 rounded-2xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#0D2240]/5 border border-[#0D2240]/10 flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 text-[#C5A059]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#0D2240] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Harmonized Executive Commitment Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="rounded-3xl p-8 bg-[#0D2240] text-white border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
                
                <h3 className="text-2xl font-extrabold mb-6 border-b border-[#C5A059]/30 pb-4 text-white">
                  คำมั่นสัญญาทางวิชาชีพจากเรา
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0D2240] font-extrabold text-sm flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">ตรงเวลา 100% ปราศจากค่าปรับ</h4>
                      <p className="text-[#E2E8F0] text-xs sm:text-sm leading-relaxed font-normal">
                        ยื่นภาษีและปิดงบการเงินตรงตามกำหนดเวลาทางราชการแน่นอน
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0D2240] font-extrabold text-sm flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">สื่อสารตรงไปตรงมา</h4>
                      <p className="text-[#E2E8F0] text-xs sm:text-sm leading-relaxed font-normal">
                        แจ้งรายละเอียดและค่างานชัดเจน ปราศจากค่าใช้จ่ายแอบแฝง
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0D2240] font-extrabold text-sm flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">พร้อมเคียงข้างเมื่อโดนตรวจสอบ</h4>
                      <p className="text-[#E2E8F0] text-xs sm:text-sm leading-relaxed font-normal">
                        ทีมงาน CPA และทนายความพร้อมเข้าพบเจ้าหน้าที่สรรพากรแทนท่าน
                      </p>
                    </div>
                  </div>
                </div>

                {/* License details */}
                <div className="mt-8 pt-6 border-t border-[#C5A059]/30">
                  <div className="text-[#C5A059] text-xs sm:text-sm font-bold mb-1">
                    ขึ้นทะเบียนสภาวิชาชีพบัญชี & สภาทนายความแห่งประเทศไทย
                  </div>
                  <div className="text-slate-300 text-xs font-normal">
                    มีสัญญารักษาความลับลูกค้า (Non-Disclosure Agreement) ทุกสัญญา
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
