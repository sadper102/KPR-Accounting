"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Clock, X, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Hotline Announcement Bar */}
      <div className="bg-[#0D2240] text-white text-xs py-2 px-4 border-b border-slate-700/80 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-amber-300">
              <Phone className="w-3.5 h-3.5" />
              <span>สายด่วนปรึกษาบัญชี-กฎหมาย: {SITE_CONFIG.mobile}</span>
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>เวลาทำการ: {SITE_CONFIG.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-[11px] font-semibold">
            <span className="bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded border border-amber-500/30">
              ปรึกษาฟรีไม่มีค่าใช้จ่าย
            </span>
            <a
              href={`https://line.me/ti/p/${SITE_CONFIG.line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Line: {SITE_CONFIG.line}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Options */}
        {isOpen && (
          <div className="executive-card p-4 rounded-2xl bg-white border border-slate-300 shadow-2xl space-y-3 animate-fadeIn w-64">
            <div className="text-xs font-black text-[#0D2240] border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>ติดต่อสำนักงานด่วน</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href={`https://line.me/ti/p/${SITE_CONFIG.line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 transition-colors font-bold text-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div>แชตปรึกษาผ่าน Line</div>
                <div className="text-[10px] text-emerald-700 font-normal">ID: {SITE_CONFIG.line}</div>
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
                <div>โทรศัพท์สายตรง</div>
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
          <span className="hidden sm:inline font-bold">ปรึกษาด่วน</span>
        </button>
      </div>
    </>
  );
}
