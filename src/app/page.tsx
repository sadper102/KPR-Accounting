import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ศรีนครินทร์ | KPR ACCOUNTING",
  description:
    "สำนักงานบัญชีโดยผู้สอบบัญชีรับอนุญาต (CPA) รับทำบัญชี ยื่นภาษี ตรวจสอบบัญชี จดบริษัทครบวงจร ใกล้สวนหลวง-ศรีนครินทร์ ทำบัญชีเริ่มต้น 2,500 บาท/เดือน ปรึกษาฟรี",
  alternates: { canonical: "/" },
  openGraph: {
    title: "รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ศรีนครินทร์ | KPR ACCOUNTING",
    description:
      "สำนักงานบัญชีโดยผู้สอบบัญชีรับอนุญาต (CPA) รับทำบัญชี ยื่นภาษี ตรวจสอบบัญชี จดบริษัทครบวงจร ใกล้สวนหลวง-ศรีนครินทร์ ทำบัญชีเริ่มต้น 2,500 บาท/เดือน ปรึกษาฟรี",
    url: "https://kpraccount.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Pricing />
      <Workflow />
      <Contact />
    </>
  );
}
