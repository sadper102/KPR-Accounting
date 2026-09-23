"use client";

import React from "react";
import { ShieldCheck, Award, Lock, Building2, ExternalLink, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function TrustBar() {
  const accreditations = [
    {
      title: "สภาวิชาชีพบัญชี",
      subtitle: "ขึ้นทะเบียนผู้ทำบัญชี & CPA",
      icon: Award,
      href: "https://tfac.or.th/",
    },
    {
      title: "กรมพัฒนาธุรกิจการค้า",
      subtitle: "DBD Registered / Verified",
      icon: Building2,
      href: "https://www.dbd.go.th/",
    },
  ];

  const clientSectors = [
    "ธุรกิจโลจิสติกส์ & ขนส่ง",
    "ธุรกิจนำเข้า - ส่งออก",
    "ธุรกิจก่อสร้าง",
    "ธุรกิจค้าปลีก & อีคอมเมิร์ซ",
    "ธุรกิจบริการ & การแพทย์",
  ];

  return (
    <section className="py-10 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Accreditation Badges Bar */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto pb-8 border-b border-[#E2E8F0]">
            {accreditations.map((acc, idx) => {
              const IconComp = acc.icon;
              const content = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#C5A059] group-hover:text-[#0D2240] transition-colors duration-200">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <div className="text-[#0D2240] font-bold text-sm sm:text-base leading-tight truncate group-hover:text-[#C5A059] transition-colors">
                        {acc.title}
                      </div>
                      {acc.href && (
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C5A059] shrink-0 transition-colors" />
                      )}
                    </div>
                    <div className="text-[#475569] font-medium text-xs mt-0.5 truncate">
                      {acc.subtitle}
                    </div>
                  </div>
                </>
              );

              const cardClasses =
                "flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all duration-200 group";

              if (acc.href) {
                return (
                  <a
                    key={idx}
                    href={acc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClasses} cursor-pointer`}
                    title={`ไปยังเว็บไซต์ทางการ ${acc.title}`}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={idx} className={cardClasses}>
                  {content}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Client Industry Sectors Bar */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D2240] uppercase tracking-wider shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
              <span>ประเภทธุรกิจที่ไว้วางใจ KPR ACCOUNTING:</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs font-medium text-[#334155]">
              {clientSectors.map((sector, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="font-medium text-[#0D2240]">{sector}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
