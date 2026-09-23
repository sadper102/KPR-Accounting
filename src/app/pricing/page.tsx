import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { PRICING_PACKAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "อัตราค่าบริการ | แพ็กเกจทำบัญชี ภาษี จดทะเบียนบริษัท ราคาโปร่งใส",
  description:
    "อัตราค่าบริการทำบัญชีและภาษี บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง เริ่มต้น 2,500 บาท/เดือน ตกลงค่างานชัดเจนล่วงหน้า",
};

export default function PricingPage() {
  const faqs = [
    {
      q: "ค่าบริการคิดจากปัจจัยใดบ้าง?",
      a: "ค่าบริการรายเดือนคิดจากปริมาณเอกสารรายการค้าต่อเดือน (บิลซื้อ บิลขาย สเตทเมนต์), ความซับซ้อนของโครงสร้างธุรกิจ และการจดทะเบียนภาษีมูลค่าเพิ่ม (VAT) โดยเราจะประเมินและเสนอราคาที่ชัดเจนให้ท่านพิจารณาก่อนเริ่มงานเสมอ",
    },
    {
      q: "มีค่าใช้จ่ายแอบแฝงระหว่างปีหรือไม่?",
      a: "ไม่มีค่าใช้จ่ายแอบแฝงอย่างแน่นอน อัตราค่าบริการที่ตกลงในสัญญาครอบคลุมขอบเขตงานทั้งหมด เช่น การทำบัญชีและการยื่นภาษีประจำเดือน สำหรับงานปิดงบการเงินและตรวจสอบบัญชีประจำปี จะระบุค่าธรรมเนียมไว้อย่างโปร่งใสล่วงหน้า",
    },
    {
      q: "หากเพิ่งเริ่มจดบริษัทและยังไม่มีรายการค้า คิดราคาอย่างไร?",
      a: "สำหรับบริษัทเปิดใหม่ที่ยังไม่มีรายการค้า เรามีแพ็กเกจพิเศษสำหรับบริษัทยังไม่มีการเคลื่อนไหว (งบเปล่า) เพื่อช่วยประหยัดต้นทุนในการยื่นภาษีประจำเดือนและปิดงบตามที่กฎหมายกำหนด",
    },
    {
      q: "ระหว่างสัญญา สามารถปรึกษาเรื่องภาษีได้ตลอดเวลาหรือไม่?",
      a: "ลูกค้าที่ใช้บริการรายเดือนกับเรา สามารถโทรหรือทักสอบถามข้อสงสัยด้านบัญชีและภาษีกับทีมงานและผู้สอบบัญชีได้ตลอดเวลาทำการ โดยไม่มีค่าใช้จ่ายเพิ่มเติม",
    },
  ];

  const addOns = [
    { service: "ขึ้นทะเบียนประกันสังคมนายจ้าง / ลูกจ้าง", price: "เริ่มต้น 1,500 บาท" },
    { service: "จดทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.01/ภ.พ.20)", price: "เริ่มต้น 2,500 บาท" },
    { service: "เปลี่ยนแปลงกรรมการ / แก้ไขอำนาจกรรมการ", price: "เริ่มต้น 3,000 บาท" },
    { service: "ย้ายที่ตั้งสำนักงานใหญ่ / สาขา", price: "เริ่มต้น 3,500 บาท" },
    { service: "จัดทำและยื่นงบการเงินย้อนหลัง (ปิดงบค้าง)", price: "ประเมินตามปริมาณงาน" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge="PRICING PACKAGES — อัตราค่าบริการ"
        title="แพ็กเกจราคาโปร่งใส"
        titleHighlight="ไม่มีค่าใช้จ่ายแอบแฝง"
        description="เลือกแพ็กเกจที่เหมาะสมกับขนาดและขอบเขตธุรกิจของคุณ ตกลงค่างานชัดเจนล่วงหน้าก่อนเริ่มงาน ยึดมั่นในความคุ้มค่าและคุณภาพงานระดับวิชาชีพ"
        breadcrumbs={[{ label: "อัตราค่าบริการ" }]}
      />

      {/* Main Pricing Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-4">
              MONTHLY & ONE-TIME PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2240] mb-4">
              เลือกแพ็กเกจที่ตอบโจทย์ธุรกิจคุณ
            </h2>
            <p className="text-[#334155] text-base leading-relaxed">
              ทุกแพ็กเกจรวมการดูแลโดยทีมนักบัญชีมืออาชีพ และลงนามในสัญญารักษาความลับ (NDA) 100%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-200 ${
                  pkg.popular
                    ? "border-2 border-[#0D2240] shadow-2xl bg-white lg:-translate-y-2 z-10"
                    : "bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:border-slate-300"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D2240] text-[#C5A059] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>แพ็กเกจยอดนิยม</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-[#0D2240] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#475569] text-sm mb-6 min-h-[40px] leading-relaxed font-normal">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      {"prefix" in pkg && pkg.prefix && (
                        <span className="text-[#64748B] text-sm sm:text-base font-semibold">
                          {pkg.prefix}
                        </span>
                      )}
                      <span className="text-4xl sm:text-5xl font-black text-[#0D2240] tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-[#64748B] text-sm font-semibold">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                      บริการที่รวมในแพ็กเกจ:
                    </div>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                        <Check className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  href="/contact"
                  variant={pkg.popular ? "navy" : "outline"}
                  size="md"
                  className="w-full justify-center font-bold"
                >
                  เลือกแพ็กเกจนี้
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Pricing Table */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              ADD-ON SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              บริการเสริมและงานทะเบียนพิเศษ
            </h2>
            <p className="text-[#334155] text-sm sm:text-base">
              เลือกใช้บริการเฉพาะทางเพิ่มเติมได้ตามความต้องการของธุรกิจ
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="divide-y divide-[#E2E8F0]">
              {addOns.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="font-semibold text-[#0D2240] text-sm sm:text-base">
                    {item.service}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#C5A059] shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              PRICING FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              คำถามที่พบบ่อยเกี่ยวกับค่าบริการ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0D2240] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#475569] text-sm sm:text-base leading-relaxed pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ต้องการใบเสนอราคาเฉพาะสำหรับธุรกิจของคุณ?"
        subtitle="ส่งข้อมูลประเภทธุรกิจและประมาณการปริมาณรายการค้า เพื่อรับใบเสนอราคาอย่างเป็นทางการภายใน 24 ชม."
      />
    </div>
  );
}
