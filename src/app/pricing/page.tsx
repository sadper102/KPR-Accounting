import React from "react";
import type { Metadata } from "next";
import PricingPageContent from "@/components/pages/PricingPageContent";

export const metadata: Metadata = {
  title: "ค่าบริการ | แพ็กเกจทำบัญชี ภาษี จดทะเบียนบริษัท ราคาโปร่งใส",
  description:
    "ค่าบริการทำบัญชีและภาษี บริษัท เคพีอาร์ แอคเคาน์ติ้ง จำกัด ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง เริ่มต้น 2,500 บาท/เดือน ตกลงค่างานชัดเจนล่วงหน้า",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
