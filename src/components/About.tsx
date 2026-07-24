"use client";

import React from "react";
import { Shield, Award, Users, Lock } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS, SITE_CONFIG } from "@/lib/constants";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "ความน่าเชื่อถือวิชาชีพ",
      desc: "บริหารงานโดยผู้สอบบัญชีรับอนุญาต (CPA) และทนายความตั๋วปีที่มีประสบการณ์ยาวนาน",
    },
    {
      icon: Award,
      title: "ถูกต้องตามกฎหมาย 100%",
      desc: "ยึดมั่นในมาตรฐานการบัญชีและข้อกฎหมายอย่างถูกต้อง แม่นยำ ปราศจากความเสี่ยง",
    },
    {
      icon: Users,
      title: "ที่ปรึกษาเฉพาะราย",
      desc: "ทีมงานดูแลอย่างใกล้ชิด ตอบคำถามรวดเร็วเสมือนเป็นแผนกบัญชีและกฎหมายประจำองค์กรท่าน",
    },
    {
      icon: Lock,
      title: "สัญญารักษาความลับ (NDA)",
      desc: "ปกป้องข้อมูลทางการเงินและเอกสารสำคัญของลูกค้าด้วยมาตรฐานความปลอดภัยระดับสูงสุด",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
              ABOUT US — เกี่ยวกับเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6 leading-tight [text-wrap:balance]">
              คู่คิดทางธุรกิจที่ <span className="text-[#C5A059] whitespace-nowrap">ไว้วางใจได้เสมอ</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#334155] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto [text-wrap:balance]">
              <strong className="text-[#0D2240] font-bold">KPR ACCOUNTING (เคพีอาร์ แอคเคาท์ติ้ง)</strong> ให้บริการด้านการบัญชี ภาษี ตรวจสอบบัญชี และกฎหมายธุรกิจแบบครบวงจร เรามุ่งมั่นช่วยเหลือผู้ประกอบการ SMEs และนิติบุคคลทุกขนาดให้ดำเนินธุรกิจได้อย่างราบรื่นและมั่นคง
            </p>
          </ScrollReveal>
        </div>

        {/* Animated Counter Stats Bar */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="executive-card rounded-2xl p-6 text-center border border-[#E2E8F0] bg-white shadow-xs"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2240] mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#475569] text-xs sm:text-sm font-bold">
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
