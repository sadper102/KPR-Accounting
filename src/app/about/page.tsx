import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  Lock,
  Building2,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Phone,
  Target,
  Compass,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด",
  description:
    "ทำความรู้จัก บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด สำนักงานบัญชีและภาษีคุณภาพสูง บริหารงานโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) ยึดมั่นความถูกต้องตามกฎหมาย 100%",
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "ความน่าเชื่อถือวิชาชีพ (CPA)",
      desc: "บริหารงานและควบคุมมาตรฐานโดยผู้สอบบัญชีรับอนุญาต (CPA) และทีมนักบัญชีมืออาชีพที่มีประสบการณ์ยาวนาน",
    },
    {
      icon: Award,
      title: "ถูกต้องตามกฎหมาย 100%",
      desc: "ยึดมั่นในมาตรฐานการรายงานทางการเงิน (TFRS) และประมวลรัษฎากรอย่างเคร่งครัด ปราศจากความเสี่ยงทางภาษี",
    },
    {
      icon: Users,
      title: "ที่ปรึกษาเฉพาะราย",
      desc: "ทีมงานดูแลอย่างใกล้ชิดและรวดเร็ว ตอบโจทย์โครงสร้างธุรกิจของท่านเสมือนเป็นฝ่ายบัญชีประจำองค์กร",
    },
    {
      icon: Lock,
      title: "สัญญารักษาความลับ (NDA)",
      desc: "ปกป้องข้อมูลทางการเงิน ตัวเลขธุรกิจ และเอกสารสำคัญของลูกค้าด้วยมาตรฐานความปลอดภัยระดับสูงสุด",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge="ABOUT US — เกี่ยวกับเรา"
        title="คู่คิดทางธุรกิจที่"
        titleHighlight="คุณไว้วางใจได้เสมอ"
        description="บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด มุ่งมั่นส่งมอบบริการด้านการบัญชี ภาษี ตรวจสอบบัญชี และจดทะเบียนธุรกิจ ด้วยความซื่อสัตย์ แม่นยำ และมาตรฐานวิชาชีพสูงสุด"
        breadcrumbs={[{ label: "เกี่ยวกับเรา" }]}
      />

      {/* Company Story & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="down">
                <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-4">
                  COMPANY PROFILE — ข้อมูลองค์กร
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2240] mb-6 leading-tight">
                  พันธมิตรที่พร้อมเติบโตเคียงข้าง <br />
                  <span className="text-[#C5A059]">ทุกก้าวของธุรกิจคุณ</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="space-y-4 text-[#334155] text-base leading-relaxed">
                  <p>
                    <strong className="text-[#0D2240] font-bold">{SITE_CONFIG.companyName} ({SITE_CONFIG.name})</strong> ก่อตั้งขึ้นด้วยเจตนารมณ์อันแน่วแน่ในการยกระดับมาตรฐานงานบัญชีและภาษีของภาคธุรกิจไทย โดยมุ่งเน้นการให้บริการที่มีคุณภาพ แม่นยำ และโปร่งใส
                  </p>
                  <p>
                    เราเชื่อว่าระบบบัญชีที่ดีไม่ได้มีไว้เพียงเพื่อยื่นภาษีตามหน้าที่เท่านั้น แต่คือเครื่องมือเชิงกลยุทธ์ที่สำคัญที่สุดในการบริหารงาน การวางแผนกระแสเงินสด และการสร้างความน่าเชื่อถือให้กับสถาบันการเงินและคู่ค้า
                  </p>
                  <p>
                    ด้วยทีมงานผู้มีความรู้ความสามารถ ทั้งผู้สอบบัญชีรับอนุญาต (CPA) และผู้เชี่ยวชาญด้านภาษีอากร เราพร้อมให้คำปรึกษาและดำเนินงานอย่างถูกต้องตามกฎหมายในทุกมิติ
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Corporate Registration Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-[#0D2240] text-white rounded-2xl p-8 border-2 border-[#C5A059] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl" />
                  
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] border border-white/10">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                        นิติบุคคลจดทะเบียนถูกต้อง
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white">
                        {SITE_CONFIG.companyName}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-slate-400 text-xs mb-1">เลขทะเบียนนิติบุคคล / เลขประจำตัวผู้เสียภาษี</div>
                      <a
                        href="https://www.dbd.go.th/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C5A059] font-mono font-bold text-base hover:underline flex items-center gap-1.5"
                      >
                        <span>{SITE_CONFIG.taxId}</span>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </a>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-1">สถานะทางวิชาชีพ</div>
                      <div className="text-slate-200 font-medium">
                        ขึ้นทะเบียนกับสภาวิชาชีพบัญชี ในพระบรมราชูปถัมภ์ (FAP)
                      </div>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-1">ที่ตั้งสำนักงาน</div>
                      <div className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        {SITE_CONFIG.address}
                      </div>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-1">เบอร์โทรศัพท์ติดต่อ</div>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-white font-bold hover:text-[#C5A059] transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-[#C5A059]" />
                        <span>{SITE_CONFIG.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0D2240] mb-3">
                  วิสัยทัศน์ (Vision)
                </h3>
                <p className="text-[#334155] text-base leading-relaxed font-normal">
                  มุ่งสู่การเป็นสำนักงานบัญชีและภาษีระดับแถวหน้าที่ผู้ประกอบการไว้วางใจสูงสุด ส่งมอบงานด้วยความถูกต้อง แม่นยำ รวดเร็ว และสร้างมูลค่าเพิ่มให้แก่ธุรกิจของลูกค้าอย่างยั่งยืน
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0D2240] mb-3">
                  พันธกิจ (Mission)
                </h3>
                <ul className="space-y-3 text-[#334155] text-sm leading-relaxed font-normal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>จัดทำบัญชีตามมาตรฐานการรายงานทางการเงิน (TFRS) อย่างถูกต้องตามกฎหมาย 100%</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>วางแผนภาษีอย่างรัดกุม ให้ธุรกิจได้รับสิทธิประโยชน์ทางภาษีสูงสุดโดยไร้ความเสี่ยง</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>เป็นที่ปรึกษาที่เข้าถึงง่าย ตอบคำถามรวดเร็ว และร่วมแก้ปัญหาเคียงข้างผู้บริหาร</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>รักษาความลับและข้อมูลทางการค้าของลูกค้าด้วยสัญญารักษาความลับ (NDA) และระบบความปลอดภัยระดับสูง</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4 Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="down">
              <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
                OUR VALUES — คุณค่าหลักของเรา
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2240] mt-4 mb-4">
                4 เสาหลักแห่งมาตรฐานวิชาชีพ
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#334155] text-base leading-relaxed">
                หลักการทำงานที่เรายึดมั่นอย่างเคร่งครัด เพื่อสร้างความเชื่อมั่นสูงสุดแก่ลูกค้าทุกท่าน
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                  <GlassCard className="h-full bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#0D2240] flex items-center justify-center mb-6 border border-[#E2E8F0] group-hover:border-[#C5A059]">
                      <IconComp className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D2240] mb-3">
                      {val.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ร่วมงานกับผู้เชี่ยวชาญด้านบัญชีและภาษีมืออาชีพ"
        subtitle="ให้ KPR ACCOUNTING ช่วยดูแลงานหลังบ้าน เพื่อให้คุณมีเวลาทุ่มเทกับการขยายธุรกิจอย่างเต็มที่"
      />
    </div>
  );
}
