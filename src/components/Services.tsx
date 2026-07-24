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
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              OUR SERVICES — บริการของเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              บริการด้านบัญชีและกฎหมาย <br />
              <span className="text-gold-gradient font-serif">ครอบคลุมทุกความต้องการ</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg">
              เราให้บริการที่ปรับให้เหมาะกับประเภทและขนาดธุรกิจของคุณ ตั้งแต่ระดับเริ่มต้นจนถึงบริษัทมหาชน
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = ICON_MAP[srv.icon] || Calculator;

            return (
              <ScrollReveal key={srv.id} direction="up" delay={0.1 * idx}>
                <GlassCard className="h-full flex flex-col justify-between group relative overflow-hidden">
                  
                  {/* Subtle top gold highlight line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Title & Short Desc */}
                    <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-amber-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    {/* Bullet features list */}
                    <ul className="space-y-2.5 mb-8">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link per service */}
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-semibold text-[#C5A059] hover:text-amber-300 transition-colors group-hover:translate-x-1 duration-300"
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

        {/* Bottom Banner */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-12 text-center border border-amber-500/30 gold-glow relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-serif">
                ต้องการที่ปรึกษาเฉพาะทาง หรือ แพ็กเกจดูแลรายเดือน?
              </h3>
              <p className="text-slate-300 text-base mb-8">
                เรามีแพ็กเกจยืดหยุ่นที่คุ้มค่า เหมาะสำหรับผู้เริ่มต้นประกอบการและบริษัทที่ต้องการดูแลอย่างต่อเนื่อง
              </p>
              <Button href="#contact" variant="gold" size="lg">
                ขอใบเสนอราคาแพ็กเกจ
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
