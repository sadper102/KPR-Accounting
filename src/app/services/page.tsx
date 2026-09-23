import React from "react";
import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "บริการของเรา | รับทำบัญชี วางแผนภาษี จดทะเบียน ตรวจสอบบัญชี",
  description:
    "บริการด้านบัญชี ภาษีอากร ตรวจสอบบัญชี จดทะเบียนบริษัทครบวงจร โดยผู้สอบบัญชีรับอนุญาต (CPA) บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด ถูกต้องตามกฎหมาย 100%",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
