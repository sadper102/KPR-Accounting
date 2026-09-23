import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Lock,
  ArrowRight,
  Clock,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { WORKFLOW_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ขั้นตอนการทำงาน | กระบวนการบริการบัญชีและภาษีที่เป็นระบบ",
  description:
    "ขั้นตอนการทำงานของ บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด 3 ขั้นตอนมาตรฐาน โปร่งใส พร้อมปฏิทินกำหนดยื่นภาษีประจำเดือนและสัญญา NDA รักษาความลับ 100%",
};

export default function WorkflowPage() {
  const detailedWorkflow = [
    {
      step: "01",
      title: "ปรึกษาและประเมินงาน (Consultation & Assessment)",
      desc: "วิเคราะห์โครงสร้างธุรกิจ ปริมาณรายการค้า และวางแนวทางการจัดเก็บเอกสารอย่างถูกต้อง",
      points: [
        "พูดคุยทำความเข้าใจลักษณะโมเดลธุรกิจ แหล่งที่มาของรายได้และค่าใช้จ่าย",
        "ตรวจสอบปริมาณเอกสารรายการค้าต่อเดือน (บิลซื้อ บิลขาย ใบเสร็จ สเตทเมนต์)",
        "ให้คำแนะนำเรื่องการออกใบกำกับภาษี และการจัดการเอกสารหัก ณ ที่จ่าย",
        "ประเมินค่าบริการที่เหมาะสมและจัดส่งใบเสนอราคาอย่างโปร่งใส",
      ],
    },
    {
      step: "02",
      title: "เสนอราคาและทำสัญญา (Engagement & NDA)",
      desc: "ตกลงขอบเขตงานอย่างชัดเจน ลงนามในสัญญาจ้างและสัญญารักษาความลับทางการค้า (NDA)",
      points: [
        "ยืนยันขอบเขตงานและค่าบริการโดยไม่มีค่าใช้จ่ายแอบแฝง",
        "จัดทำและลงนามในสัญญาจ้างบริการทางวิชาชีพบัญชี",
        "ลงนามในสัญญารักษาความลับ (Non-Disclosure Agreement - NDA) เพื่อความปลอดภัยสูงสุดของข้อมูล",
        "ดำเนินการแจ้งขึ้นทะเบียนเป็นผู้ทำบัญชีตามกฎหมายกับกรมพัฒนาธุรกิจการค้า (DBD)",
      ],
    },
    {
      step: "03",
      title: "ดำเนินงานและส่งมอบ (Execution & Reporting)",
      desc: "บันทึกบัญชีตามมาตรฐาน TFRS ยื่นภาษีตรงเวลาทุกเดือน และส่งมอบรายงานสรุปให้ลูกค้า",
      points: [
        "รับเอกสารทางบัญชีประจำเดือน (เอกสารตัวจริง หรือ Scan/Digital File)",
        "ตรวจสอบความถูกต้องของใบกำกับภาษีและใบเสร็จรับเงินตามประมวลรัษฎากร",
        "จัดทำและยื่นแบบภาษีประจำเดือน (ภ.พ.30, ภ.ง.ด.1, 3, 53) ทางระบบอินเทอร์เน็ตตรงตามกำหนด 100%",
        "ส่งมอบใบเสร็จรับเงินของกรมสรรพากรและสรุปตัวเลขผลประกอบการประจำเดือนให้แก่ผู้บริหาร",
      ],
    },
  ];

  const taxCalendar = [
    {
      date: "ทุกวันที่ 7 / 15",
      type: "ภ.ง.ด.1, ภ.ง.ด.3, ภ.ง.ด.53",
      desc: "ยื่นแบบแสดงรายการภาษีเงินได้หัก ณ ที่จ่าย ประจำเดือน (ยื่นออนไลน์ขยายถึงวันที่ 15)",
    },
    {
      date: "ทุกวันที่ 15 / 23",
      type: "ภ.พ.30 (ภาษีมูลค่าเพิ่ม VAT)",
      desc: "ยื่นแบบภาษีมูลค่าเพิ่มพร้อมสรุปรายงานภาษีซื้อ-ภาษีขาย (ยื่นออนไลน์ขยายถึงวันที่ 23)",
    },
    {
      date: "ทุกวันที่ 15",
      type: "สปส.1-10 (เงินสมทบประกันสังคม)",
      desc: "นำส่งเงินสมทบกองทุนประกันสังคมนายจ้างและลูกจ้างประจำเดือน",
    },
    {
      date: "ภายใน ส.ค.",
      type: "ภ.ง.ด.51 (ภาษีนิติบุคคลครึ่งปี)",
      desc: "จัดทำประมาณการกำไรสุทธิและยื่นแบบภาษีเงินได้นิติบุคคลครึ่งรอบระยะเวลาบัญชี",
    },
    {
      date: "ภายใน พ.ค.",
      type: "ภ.ง.ด.50 & ยื่นงบ DBD",
      desc: "ปิดงบการเงินประจำปี ผ่านการตรวจสอบโดย CPA ยื่นภาษีประจำปีและนำส่งงบต่อกระทรวงพาณิชย์",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge="WORKFLOW — ขั้นตอนการทำงาน"
        title="กระบวนการทำงานที่เป็นระบบ"
        titleHighlight="โปร่งใส ตรวจสอบได้"
        description="ขั้นตอนการปฏิบัติงานมาตรฐานวิชาชีพบัญชี 3 ขั้นตอน ชัดเจนในทุกกระบวนการ ยื่นภาษีตรงเวลา 100% พร้อมปกป้องข้อมูลสำคัญของท่านอย่างเคร่งครัด"
        breadcrumbs={[{ label: "ขั้นตอนการทำงาน" }]}
      />

      {/* 3-Step Detailed Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-4">
              OUR 3-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2240] mb-4">
              มาตรฐานการทำงาน 3 ขั้นตอนสู่ความสำเร็จ
            </h2>
            <p className="text-[#334155] text-base leading-relaxed">
              เราใส่ใจในทุกรายละเอียดตั้งแต่ก้าวแรก เพื่อให้ท่านดำเนินธุรกิจได้อย่างสบายใจไร้ความกังวล
            </p>
          </div>

          <div className="space-y-12">
            {detailedWorkflow.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-xs relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  
                  {/* Step Badge & Title */}
                  <div className="lg:w-1/3">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D2240] text-[#C5A059] font-black text-2xl flex items-center justify-center mb-6 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2240] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#475569] text-base leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Points Details */}
                  <div className="lg:w-2/3 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs w-full">
                    <h4 className="text-sm font-bold text-[#0D2240] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-[#C5A059]" />
                      <span>กิจกรรมที่ดำเนินการในขั้นตอนนี้:</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Tax Filing Calendar */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              TAX TIMELINE — ปฏิทินภาษี
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              กำหนดเวลายื่นภาษีที่เรารักษาไว้อย่างเคร่งครัด
            </h2>
            <p className="text-[#334155] text-sm sm:text-base">
              มั่นใจได้ 100% ว่าธุรกิจของท่านจะไม่โดนเบี้ยปรับหรือเงินเพิ่มจากการยื่นภาษีล่าช้า
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm divide-y divide-[#E2E8F0] overflow-hidden">
            {taxCalendar.map((cal, cIdx) => (
              <div
                key={cIdx}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0D2240] shrink-0">
                    <Calendar className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-[#0D2240]">
                      {cal.type}
                    </div>
                    <div className="text-sm text-[#475569] leading-relaxed">
                      {cal.desc}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3.5 py-1.5 rounded-lg bg-amber-50 text-[#94670A] font-bold text-xs sm:text-sm border border-amber-200">
                    {cal.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Confidentiality */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center mx-auto mb-6 shadow-md">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
            ความลับทางการค้าของคุณคือหัวใจสำคัญสูงสุดของเรา
          </h2>
          <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
            KPR ACCOUNTING ทำสัญญารักษาความลับ (Non-Disclosure Agreement) เป็นลายลักษณ์อักษรกับลูกค้าทุกราย และจัดเก็บข้อมูลบนระบบเซิร์ฟเวอร์คลาวด์ที่มีการเข้ารหัสความปลอดภัยระดับธนาคาร เพื่อป้องกันการรั่วไหลของข้อมูลทางการเงิน 100%
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="เริ่มต้นร่วมงานกับ KPR ACCOUNTING วันนี้"
        subtitle="รับคำปรึกษาและวางระบบการรับ-ส่งเอกสารที่สะดวกรวดเร็ว เหมาะกับรูปแบบธุรกิจของคุณ"
      />
    </div>
  );
}
