import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ติดต่อเรา | บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด สำนักงานบัญชี ศรีนครินทร์",
  description:
    "ติดต่อ บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด โทร 081-915-5644 สำนักงานตั้งอยู่ที่ 735/1 อาคารA ห้องเลขที่ A147-148 ชั้น 1 ถนนศรีนครินทร์ แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ ปรึกษาฟรี",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge="CONTACT US — ติดต่อเรา"
        title="ติดต่อสอบถามและขอคำปรึกษา"
        titleHighlight="ไม่มีค่าใช้จ่ายเบื้องต้น"
        description="พูดคุยกับทีมงานผู้สอบบัญชีรับอนุญาต (CPA) และผู้เชี่ยวชาญด้านภาษีของ KPR ACCOUNTING เพื่อประเมินงานหรือขอใบเสนอราคา เราพร้อมยินดีให้บริการทุกวันทำการ"
        breadcrumbs={[{ label: "ติดต่อเรา" }]}
      />

      {/* Embedded Contact Component */}
      <div className="-mt-8">
        <Contact />
      </div>
    </div>
  );
}
