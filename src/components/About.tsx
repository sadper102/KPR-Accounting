"use client";

import React from "react";
import { Shield, Award, Users, Lock, CheckCircle } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS, SITE_CONFIG } from "@/lib/constants";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "ความน่าเชื่อถือสูง",
      desc: "บริหารงานโดยผู้สอบบัญชีรับอนุญาต (CPA) และทนายความตั๋วปีที่มีประสบการณ์ยาวนาน",
    },
    {
      icon: Award,
      title: "มาตรฐานระดับสูง",
      desc: "ยึดมั่นในมาตรฐานการบัญชีและข้อกฎหมายอย่างถูกต้องแม่นยำ 100%",
    },
    {
      icon: Users,
      title: "ดูแลอย่างใกล้ชิด",
      desc: "มีทีมงานที่ปรึกษาเฉพาะราย ให้คำตอบรวดเร็วเสมือนเป็นแผนกบัญชีประจำบริษัทท่าน",
    },
    {
      icon: Lock,
      title: "รักษาความลับเข้มงวด",
      desc: "ปกป้องข้อมูลทางการเงินและเอกสารสำคัญของลูกค้าด้วยมาตรฐานความปลอดภัยสูงสุด",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              ABOUT US — เกี่ยวกับเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              คู่คิดทางธุรกิจที่ <span className="text-gold-gradient font-serif">ไว้วางใจได้เสมอ</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong>KPR ACCOUNTING (เคพีอาร์ แอคเคาท์ติ้ง)</strong> คือสำนักงานให้บริการด้านการบัญชี ภาษี ตรวจสอบบัญชี และกฎหมายธุรกิจแบบครบวงจร เรามุ่งมั่นช่วยเหลือผู้ประกอบการ SMEs และองค์กรทุกขนาดให้เติบโตอย่างมั่นคง
            </p>
          </ScrollReveal>
        </div>

        {/* Animated Counter Stats Bar */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 text-center border border-amber-500/20 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient font-serif mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx + 0.2}>
                <GlassCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-serif">
                      {val.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
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
