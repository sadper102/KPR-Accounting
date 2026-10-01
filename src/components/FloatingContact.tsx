"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, X, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <>
      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Options */}
        {isOpen && (
          <div className="executive-card p-4 rounded-2xl bg-white border border-slate-300 shadow-2xl space-y-3 animate-fadeIn w-68">
            <div className="text-xs font-black text-[#0D2240] border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>{lang === "th" ? "ติดต่อสำนักงานด่วน" : "Quick Contact"}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-300">
              <a
                href={SITE_CONFIG.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-950 font-bold text-xs hover:text-emerald-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#06C755] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div>{lang === "th" ? "แชตปรึกษาผ่าน LINE" : "Chat on LINE Official"}</div>
                  <div className="text-[10px] text-emerald-700 font-normal">{lang === "th" ? "คลิกเพื่อเพิ่มเพื่อน" : "Click to connect"}</div>
                </div>
              </a>
              <div className="mt-2.5 pt-2.5 border-t border-emerald-200 flex items-center gap-2.5">
                <div className="w-16 h-16 bg-white p-1 rounded-lg border border-emerald-300 shadow-2xs shrink-0">
                  <Image
                    src={SITE_CONFIG.lineQrCode}
                    alt="LINE QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <div className="text-[11px] text-slate-700 leading-tight">
                  <span className="font-bold text-[#0D2240] block mb-0.5">{lang === "th" ? "สแกน QR Code" : "Scan QR Code"}</span>
                  {lang === "th" ? "เปิดกล้องมือถือเพื่อสแกน" : "Scan with phone camera"}
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-950 border border-blue-200 transition-colors font-bold text-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                <Facebook className="w-4 h-4" />
              </div>
              <div>
                <div>{lang === "th" ? "Facebook เพจ" : "Facebook Page"}</div>
                <div className="text-[10px] text-blue-700 font-normal">{lang === "th" ? "ทักแชต / ติดตามข่าวสาร" : "Follow & Message Us"}</div>
              </div>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0D2240] border border-slate-300 transition-colors font-bold text-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0D2240] text-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div>{lang === "th" ? "โทรศัพท์สายตรง" : "Direct Phone Line"}</div>
                <div className="text-[10px] text-slate-700 font-normal">{SITE_CONFIG.phone}</div>
              </div>
            </a>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0D2240] hover:bg-[#16325B] text-white p-3.5 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 hover:scale-105 transition-all cursor-pointer font-bold text-xs"
          aria-label="Quick contact"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-[#C5A059]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline font-bold">{lang === "th" ? "ปรึกษาด่วน" : "Quick Help"}</span>
        </button>
      </div>
    </>
  );
}
