"use client";

import React from "react";
import { ShieldCheck, Award, Lock, Building2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function TrustBar() {
  const accreditations = [
    {
      title: "สภาวิชาชีพบัญชี",
      subtitle: "ขึ้นทะเบียนผู้ทำบัญชี & CPA",
      icon: Award,
    },
    {
      title: "สภาทนายความ",
      subtitle: "ใบอนุญาตทนายความตั๋วปี",
      icon: ShieldCheck,
    },
    {
      title: "กรมพัฒนาธุรกิจการค้า",
      subtitle: "DBD Registered / Verified",
      icon: Building2,
    },
    {
      title: "มาตรฐานความปลอดภัย",
      subtitle: "สัญญารักษาความลับ ISO/NDA",
      icon: Lock,
    },
  ];

  const clientSectors = [
    "ธุรกิจเทคโนโลยี & ซอฟต์แวร์",
    "ธุรกิจโลจิสติกส์ & ขนส่ง",
    "ธุรกิจนำเข้า - ส่งออก",
    "ธุรกิจอสังหาริมทรัพย์ & ก่อสร้าง",
    "ธุรกิจค้าปลีก & อีคอมเมิร์ซ",
    "ธุรกิจบริการ & การแพทย์",
  ];

  return (
    <section className="py-10 bg-[#F1F5F9] border-y border-slate-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Accreditation Badges Bar */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-8 border-b border-slate-300/80">
            {accreditations.map((acc, idx) => {
              const IconComp = acc.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-300 shadow-sm hover:shadow-md hover:border-[#0A1628] transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0A1628] text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#0A1628] font-black text-sm sm:text-base leading-tight truncate">
                      {acc.title}
                    </div>
                    <div className="text-[#1E293B] font-bold text-xs mt-0.5 truncate">
                      {acc.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Client Industry Sectors Bar */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#0A1628] uppercase tracking-wider shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#94670A]" />
              <span>ประเภทธุรกิจที่ไว้วางใจ KPR ACCOUNTING:</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs font-bold text-[#0A1628]">
              {clientSectors.map((sector, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 shadow-xs hover:border-[#0A1628] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#94670A] shrink-0" />
                  <span className="font-bold">{sector}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
