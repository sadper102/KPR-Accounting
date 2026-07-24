"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-amber-500/20 pt-16 pb-12 overflow-hidden text-slate-400">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="#hero" className="inline-block mb-4">
              <Logo variant="full" theme="dark" size="md" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light max-w-sm">
              สำนักงานบัญชีและกฎหมาย KPR ACCOUNTING ให้บริการทำบัญชี วางแผนภาษี ตรวจสอบบัญชี จดทะเบียนบริษัท และที่ปรึกษากฎหมายธุรกิจ ด้วยมาตรฐานวิชาชีพสูงสุด
            </p>
            <div className="text-xs text-[#C5A059] font-medium bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 inline-block">
              สภาวิชาชีพบัญชี & สภาทนายความแห่งประเทศไทย
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-4 font-serif border-b border-slate-800 pb-2">
              ลิงก์ด่วน
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 font-serif border-b border-slate-800 pb-2">
              บริการหลัก
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 font-serif border-b border-slate-800 pb-2">
              ข้อมูลติดต่อ
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#C5A059]">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#C5A059]">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} KPR ACCOUNTING (เคพีอาร์ แอคเคาท์ติ้ง). All rights reserved.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#C5A059] bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 transition-colors"
          >
            <span>กลับสู่ด้านบน</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
