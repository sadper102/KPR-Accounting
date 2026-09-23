import React from "react";
import type { Metadata } from "next";
import WorkflowPageContent from "@/components/pages/WorkflowPageContent";

export const metadata: Metadata = {
  title: "ขั้นตอนการทำงาน | กระบวนการบริการบัญชีและภาษีที่เป็นระบบ",
  description:
    "ขั้นตอนการทำงานของ บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด 3 ขั้นตอนมาตรฐาน โปร่งใส พร้อมปฏิทินกำหนดยื่นภาษีประจำเดือนและสัญญา NDA รักษาความลับ 100%",
};

export default function WorkflowPage() {
  return <WorkflowPageContent />;
}
