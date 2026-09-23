import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  Receipt,
  Building2,
  FileCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "บริการของเรา | รับทำบัญชี วางแผนภาษี จดทะเบียน ตรวจสอบบัญชี",
  description:
    "บริการด้านบัญชี ภาษีอากร ตรวจสอบบัญชี จดทะเบียนบริษัทครบวงจร โดยผู้สอบบัญชีรับอนุญาต (CPA) บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด ถูกต้องตามกฎหมาย 100%",
};

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "accounting",
      title: "บริการด้านบัญชี (Accounting Services)",
      icon: Calculator,
      highlight: "ถูกต้องตามกฎหมาย 100%",
      shortDesc:
        "รับทำบัญชีครบวงจร ปิดงบการเงิน ยื่นแบบภาษีประจำเดือนและประจำปี ถูกต้องตามกฎหมาย โดยทีมผู้สอบบัญชีและนักบัญชีวิชาชีพ",
      details: [
        "จัดทำและบันทึกบัญชีตามมาตรฐานการรายงานทางการเงิน (TFRS)",
        "จัดทำสมุดรายวันขั้นต้น สมุดบัญชีแยกประเภท และงบทดลองประจำเดือน",
        "จัดทำทะเบียนทรัพย์สินและคำนวณค่าเสื่อมราคา",
        "จัดทำงบการเงินประจำปี ประกอบด้วย งบแสดงฐานะการเงิน และ งบกำไรขาดทุน",
        "ขึ้นทะเบียนเป็นผู้ทำบัญชีตามพระราชบัญญัติการบัญชี พ.ศ. 2543 อย่างถูกต้องตามกฎหมาย",
        "ให้คำปรึกษาการจัดเก็บเอกสารและวางระบบเอกสารทางการค้าที่ถูกต้อง",
      ],
      deliverables: "งบทดลองประจำเดือน, รายงานยอดลูกหนี้-เจ้าหนี้, งบการเงินประจำปี",
    },
    {
      id: "taxation",
      title: "บริการด้านภาษี (Tax Services)",
      icon: Receipt,
      highlight: "ลดความเสี่ยง ไร้เบี้ยปรับ",
      shortDesc:
        "วางแผนภาษีอย่างถูกกฎหมาย ยื่นแบบภาษีทุกประเภท ให้คำปรึกษาและเข้าพบสรรพากรแทนลูกค้า ปกป้องสิทธิประโยชน์ทางภาษีสูงสุด",
      details: [
        "จัดทำและยื่นแบบภาษีเงินได้หัก ณ ที่จ่ายประจำเดือน: ภ.ง.ด.1 (เงินเดือน), ภ.ง.ด.3 (บุคคลธรรมดา), ภ.ง.ด.53 (นิติบุคคล)",
        "จัดทำและยื่นแบบภาษีมูลค่าเพิ่มประจำเดือน (ภ.พ.30) พร้อมสรุปรายงานภาษีซื้อและรายงานภาษีขาย",
        "จัดทำและยื่นแบบภาษีเงินได้นิติบุคคลครึ่งปี (ภ.ง.ด.51) พร้อมประมาณการกำไรสุทธิ",
        "จัดทำและยื่นแบบภาษีเงินได้นิติบุคคลประจำปี (ภ.ง.ด.50)",
        "วางแผนภาษีเชิงรุกเพื่อลดหย่อนและใช้สิทธิประโยชน์ทางภาษีอย่างถูกต้องตามประมวลรัษฎากร",
        "เป็นตัวแทนชี้แจงและประสานงานเข้าพบเจ้าหน้าที่กรมสรรพากรแทนลูกค้า",
      ],
      deliverables: "ใบเสร็จและแบบแสดงรายการยื่นภาษีทุกเดือน, รายงานภาษีซื้อ-ภาษีขาย, สรุปภาษีประจำปี",
    },
    {
      id: "registration",
      title: "จดทะเบียนบริษัทและนิติบุคคล (Registration Services)",
      icon: Building2,
      highlight: "รวดเร็ว ถูกต้อง ครบถ้วน",
      shortDesc:
        "รับจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน เปลี่ยนแปลงกรรมการ แก้ไขบริคณห์สนธิ และจดภาษีมูลค่าเพิ่ม (VAT) เสร็จไว ไม่ยุ่งยาก",
      details: [
        "จองชื่อนิติบุคคลและตรวจเช็คความถูกต้องกับกรมพัฒนาธุรกิจการค้า (DBD)",
        "จัดทำตรายางบริษัท เอกสารจัดตั้ง และจดทะเบียนบริษัทจำกัด / ห้างหุ้นส่วนจำกัด",
        "จดทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.01/ภ.พ.09) กับกรมสรรพากร",
        "จดทะเบียนแก้ไขเปลี่ยนแปลง เช่น เปลี่ยนแปลงกรรมการ อำนาจกรรมการ เพิ่มทุน-ลดทุน ย้ายที่ตั้งสำนักงาน",
        "จดทะเบียนแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิและวัตถุประสงค์ของบริษัท",
        "ให้คำปรึกษาโครงสร้างผู้ถือหุ้นและทุนจดทะเบียนที่เหมาะสมกับรูปแบบธุรกิจ",
      ],
      deliverables: "หนังสือรับรองบริษัท, บัญชีรายชื่อผู้ถือหุ้น (บอจ.5), หนังสือบริคณห์สนธิ, ใบทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.20)",
    },
    {
      id: "audit",
      title: "บริการตรวจสอบบัญชี (Audit & Assurance)",
      icon: FileCheck,
      highlight: "รับรองโดย CPA",
      shortDesc:
        "ตรวจสอบงบการเงินประจำปีโดยผู้สอบบัญชีรับอนุญาต (CPA) ตามมาตรฐานการสอบบัญชี พร้อมออกรายงานเสนอผู้บริหาร",
      details: [
        "ตรวจสอบงบการเงินประจำปีของบริษัทจำกัดและห้างหุ้นส่วนนิติบุคคล",
        "ดำเนินการตรวจสอบตามมาตรฐานการสอบบัญชีไทย (Thai Standards on Auditing - TSA)",
        "ออกรายงานผลการตรวจสอบของผู้สอบบัญชีรับอนุญาต (CPA Report)",
        "ประเมินและทดสอบความมีประสิทธิผลของระบบการควบคุมภายในทางการเงิน",
        "จัดทำข้อเสนอแนะเชิงบริหาร (Management Letter) เพื่อปรับปรุงระบบงาน",
      ],
      deliverables: "รายงานของผู้สอบบัญชีรับอนุญาต (CPA), งบการเงินที่ผ่านการตรวจสอบสมบูรณ์",
    },
    {
      id: "payroll",
      title: "งานประกันสังคมและเงินเดือน (Social Security & Payroll)",
      icon: Users,
      highlight: "บริหารจัดการมืออาชีพ",
      shortDesc:
        "จัดการงานประกันสังคม ขึ้นทะเบียนนายจ้างและลูกจ้าง คำนวณเงินเดือน หักภาษี ณ ที่จ่าย และนำส่งเงินสมทบถูกต้องตรงเวลา",
      details: [
        "ขึ้นทะเบียนกองทุนประกันสังคมนายจ้างและลูกจ้าง (สปส.1-01, สปส.1-03)",
        "จัดทำและนำส่งเงินสมทบกองทุนประกันสังคมประจำเดือน (สปส.1-10)",
        "แจ้งเข้า-แจ้งออกผู้ประกันตน (สปส.6-09, สปส.9-02)",
        "คำนวณเงินเดือน (Payroll) ภาษีหัก ณ ที่จ่าย และเงินสมทบ พร้อมจัดทำสลิปเงินเดือน (Payslip)",
        "จัดทำรายงานส่งกองทุนเงินทดแทนประจำปี (กท.20)",
      ],
      deliverables: "สลิปเงินเดือนรายบุคคล, รายงานสรุปเงินเดือนและประกันสังคม, เอกสารนำส่ง สปส.1-10",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge="OUR SERVICES — บริการของเรา"
        title="บริการด้านบัญชีและภาษี"
        titleHighlight="ครอบคลุมทุกมิติธุรกิจ"
        description="บริการที่ออกแบบมาเพื่อธุรกิจทุกขนาด ตั้งแต่เริ่มต้นจดทะเบียน SMEs จนถึงบริษัทขนาดใหญ่ ดูแลโดยทีมงานผู้สอบบัญชีรับอนุญาต (CPA) และผู้เชี่ยวชาญด้านภาษี"
        breadcrumbs={[{ label: "บริการของเรา" }]}
      />

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm hover:border-[#C5A059]/40 transition-all scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Service Header & Deliverables */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#0D2240] text-[#C5A059] flex items-center justify-center shadow-xs">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-[#94670A] border border-amber-200 uppercase tracking-wider">
                          {service.highlight}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
                        {service.title}
                      </h2>

                      <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
                        {service.shortDesc}
                      </p>

                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                        <div className="text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-1">
                          สิ่งที่ลูกค้าจะได้รับ (Deliverables):
                        </div>
                        <div className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                          {service.deliverables}
                        </div>
                      </div>

                      <Button
                        href="/contact"
                        variant="navy"
                        size="md"
                        className="font-bold inline-flex items-center gap-2"
                      >
                        ขอใบเสนอราคาบริการนี้ <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Right: Service Scope Details */}
                    <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]">
                      <h3 className="text-base font-bold text-[#0D2240] mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                        <span>ขอบเขตการดำเนินงานและรายละเอียดบริการ:</span>
                      </h3>

                      <ul className="space-y-3.5">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-4">
              มั่นใจในมาตรฐานวิชาชีพทุกขั้นตอน
            </h2>
            <p className="text-[#334155] text-base max-w-2xl mx-auto mb-8">
              เราลงนามในสัญญารักษาความลับ (NDA) และสัญญาว่าจ้างชัดเจนก่อนเริ่มงานทุกครั้ง พร้อมทีมผู้สอบบัญชีรับอนุญาต (CPA) กำกับดูแลอย่างใกล้ชิด
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ต้องการคำแนะนำว่าธุรกิจของคุณเหมาะกับบริการรูปแบบใด?"
        subtitle="ปรึกษาทีมผู้เชี่ยวชาญของ KPR ACCOUNTING ฟรีวันนี้ เพื่อรับแผนบริการที่คุ้มค่าและตรงจุดที่สุด"
      />
    </div>
  );
}
