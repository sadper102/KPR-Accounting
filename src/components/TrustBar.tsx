"use client";

import React from "react";
import { ShieldCheck, Award, Lock, Building2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function TrustBar() {
  const accreditations = [
    {
      title: "สภาวิชาชีพบัญชี",
      subtitle: "ขึ้นทะเบียนผู้ทำบัญชี/CPA",
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
      title: "รักษาความลับ ISO/NDA",
      subtitle: "สัญญารักษาความลับ 100%",
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
    <section className="py-12 bg-white border-y border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Seals Grid */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-10 border-b border-slate-200">
            {accreditations.map((acc, idx) => {
              const IconComp = acc.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A1628] text-[#C5A059] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#0A1628] font-extrabold text-xs sm:text-sm truncate">
                      {acc.title}
                    </div>
                    <div className="text-[#1E293B] font-bold text-[11px] truncate">
                      {acc.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Client Industry Sectors Strip */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs font-black text-[#0A1628] uppercase tracking-wider shrink-0">
              ประเภทธุรกิจที่ไว้วางใจ KPR ACCOUNTING:
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-2.5 sm:gap-3 text-xs font-bold text-[#0A1628]">
              {clientSectors.map((sector, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#94670A] shrink-0" />
                  <span>{sector}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
