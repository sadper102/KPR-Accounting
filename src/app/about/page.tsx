import React from "react";
import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด",
  description:
    "ทำความรู้จัก บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด สำนักงานบัญชีและภาษีคุณภาพสูง บริหารงานโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) ยึดมั่นความถูกต้องตามกฎหมาย 100%",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
