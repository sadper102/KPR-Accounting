import React from "react";
import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ติดต่อเรา | บริษัท เคพีอาร์ แอคเคาน์ติ้ง จำกัด สำนักงานบัญชี ศรีนครินทร์",
  description:
    "ติดต่อ บริษัท เคพีอาร์ แอคเคาน์ติ้ง จำกัด โทร 081-915-5644 สำนักงานตั้งอยู่ที่ 735/1 อาคารA ห้องเลขที่ A147-148 ชั้น 1 ถนนศรีนครินทร์ แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ ปรึกษาฟรี",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
