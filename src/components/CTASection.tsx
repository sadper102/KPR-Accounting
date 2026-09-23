"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "พร้อมเริ่มต้นวางระบบบัญชีและภาษีอย่างมั่นใจ?",
  subtitle = "ปรึกษาผู้สอบบัญชีรับอนุญาต (CPA) และทีมนักบัญชีมืออาชีพ ฟรีไม่มีค่าใช้จ่ายเบื้องต้น",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0D2240] via-[#0A1A30] to-[#071322] text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>มาตรฐานวิชาชีพ CPA • ถูกต้องตามกฎหมาย 100%</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              className="font-bold shadow-lg"
            >
              ปรึกษาฟรี / ขอใบเสนอราคา <ArrowUpRight className="w-4 h-4 ml-1 inline" />
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>โทร {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
