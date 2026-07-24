"use client";

import React from "react";
import {
  Calculator,
  Receipt,
  Scale,
  Building2,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Calculator,
  Receipt,
  Scale,
  Building2,
  FileCheck,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0A1628] font-extrabold text-xs uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300 shadow-sm inline-block">
              OUR SERVICES — บริการของเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mt-4 mb-6">
              บริการด้านบัญชีและกฎหมาย <span className="text-[#94670A]">ครอบคลุมทุกความต้องการธุรกิจ</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#0A1628] text-base sm:text-lg font-bold">
              เราให้บริการที่ปรับให้เหมาะกับประเภทและขนาดธุรกิจของคุณ ตั้งแต่เริ่มต้นประกอบการจนถึงบริษัทเติบโต
            </p>
          </ScrollReveal>
        </div>

        {/* Structured Solid Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = ICON_MAP[srv.icon] || Calculator;

            return (
              <ScrollReveal key={srv.id} direction="up" delay={0.1 * idx}>
                <GlassCard className="h-full flex flex-col justify-between group relative border-slate-300 bg-white shadow-md" accentTop>
                  
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-[#0A1628] mb-5 group-hover:bg-[#0A1628] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title & Short Desc */}
                    <h3 className="text-2xl font-extrabold text-[#0A1628] mb-3 font-serif">
                      {srv.title}
                    </h3>
                    <p className="text-[#1E293B] text-sm mb-6 leading-relaxed font-bold">
                      {srv.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-8">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A1628] font-bold">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#94670A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-slate-200">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-extrabold text-[#0A1628] hover:text-[#94670A] transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>ขอเสนอราคา / ปรึกษาบริการนี้</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Dark Banner (PURE WHITE HIGH CONTRAST TEXT) */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 rounded-3xl p-8 sm:p-12 text-center bg-[#0A1628] text-white border-2 border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 font-serif text-white">
                ต้องการที่ปรึกษาเฉพาะทาง หรือ แพ็กเกจดูแลรายเดือน?
              </h3>
              <p className="text-white text-base sm:text-lg mb-8 font-bold leading-relaxed">
                เรามีแพ็กเกจยืดหยุ่นที่คุ้มค่า เหมาะสำหรับผู้เริ่มต้นประกอบการและบริษัทที่ต้องการดูแลอย่างต่อเนื่อง
              </p>
              <Button href="#contact" variant="gold" size="lg" className="font-extrabold">
                ขอใบเสนอราคาแพ็กเกจ
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
