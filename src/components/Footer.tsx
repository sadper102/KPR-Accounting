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
    <footer className="relative bg-[#0D2240] text-white pt-16 pb-12 overflow-hidden border-t-2 border-[#C5A059]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="full" theme="dark" size="md" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal max-w-sm">
              บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด ให้บริการทำบัญชี วางแผนภาษี ตรวจสอบบัญชี และจดทะเบียนบริษัท ด้วยมาตรฐานวิชาชีพสูงสุด
            </p>
            <div className="space-y-2">
              <a
                href="https://www.dbd.go.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A059] hover:underline font-bold bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-700 inline-block transition-colors"
                title="ไปยังเว็บไซต์กรมพัฒนาธุรกิจการค้า"
              >
                เลขทะเบียนนิติบุคคล: {SITE_CONFIG.taxId} ↗
              </a>
              <a
                href="https://tfac.or.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-[#C5A059] font-medium block transition-colors"
                title="ไปยังเว็บไซต์สภาวิชาชีพบัญชี ในพระบรมราชูปถัมภ์"
              >
                ขึ้นทะเบียนสภาวิชาชีพบัญชี ในพระบรมราชูปถัมภ์ ↗
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              ลิงก์ที่เกี่ยวข้อง
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300">
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
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              บริการหลัก
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2">
              ข้อมูลติดต่อ
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-300">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.companyName} ({SITE_CONFIG.name})
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#C5A059] bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 transition-colors cursor-pointer"
          >
            <span>กลับสู่ด้านบน</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
