"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "บริการด้านบัญชี",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "บริการด้านบัญชี",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-slate-200/80 px-3.5 py-1.5 rounded-full border border-slate-300">
              CONTACT US — ติดต่อเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2240] mt-4 mb-6">
              รับคำปรึกษาเบื้องต้น <span className="text-gold-gradient font-serif">ไม่มีค่าใช้จ่าย</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 text-base sm:text-lg">
              ทีมงานผู้เชี่ยวชาญพร้อมตอบคำถามและให้คำแนะนำแก่ท่าน ติดต่อเราได้ทันที
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <ScrollReveal direction="right" delay={0.1}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      เบอร์โทรศัพท์ติดต่อ
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-base font-bold text-[#0D2240] hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.mobile}`}
                      className="text-xs text-slate-600 hover:text-[#C5A059] transition-colors block mt-0.5"
                    >
                      {SITE_CONFIG.mobile} (สายด่วน)
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      อีเมล & Line Official
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-[#0D2240] hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <div className="text-xs text-slate-600 mt-1 font-medium">
                      Line ID: <span className="text-[#0D2240] font-bold">{SITE_CONFIG.line}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      ที่ตั้งสำนักงาน
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      เวลาทำการ
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {SITE_CONFIG.workingHours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      (หยุดวันเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์)
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Side: Clean Executive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="executive-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg">
                
                <h3 className="text-2xl font-bold text-[#0D2240] mb-2 font-serif">
                  ส่งข้อความถึงสำนักงาน
                </h3>
                <p className="text-slate-600 text-sm mb-8 font-normal">
                  กรอกรายละเอียดเบื้องต้น ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-slate-800 mb-2 font-serif">
                      ได้รับข้อมูลเรียบร้อยแล้ว
                    </h4>
                    <p className="text-slate-600 text-sm">
                      ขอบคุณที่ไว้วางใจ KPR ACCOUNTING เจ้าหนาที่จะติดต่อกลับโดยเร็วที่สุดครับ
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          ชื่อ - นามสกุล / บริษัท *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="กรุณากรอกชื่อของคุณ"
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0D2240] rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          เบอร์โทรศัพท์ติดต่อ *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="08X-XXX-XXXX"
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0D2240] rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0D2240] rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          บริการที่สนใจ
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 focus:border-[#0D2240] rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors"
                        >
                          <option value="บริการด้านบัญชี">บริการด้านบัญชี</option>
                          <option value="บริการด้านภาษี">บริการด้านภาษี</option>
                          <option value="บริการด้านกฎหมาย">บริการด้านกฎหมาย</option>
                          <option value="จดทะเบียนบริษัท">จดทะเบียนบริษัท</option>
                          <option value="ตรวจสอบบัญชี">ตรวจสอบบัญชี</option>
                          <option value="ประกันสังคม">ประกันสังคม</option>
                          <option value="อื่นๆ">ปรึกษาเรื่องอื่นๆ</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        รายละเอียดเพิ่มเติม
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="รายละเอียดธุรกิจ หรือ คำถามที่ต้องการปรึกษา..."
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0D2240] rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" variant="navy" size="lg" className="w-full">
                      ส่งข้อความขอคำปรึกษา <Send className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
