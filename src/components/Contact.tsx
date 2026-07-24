"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              CONTACT US — ติดต่อเรา
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              รับคำปรึกษา <span className="text-gold-gradient font-serif">ไม่มีค่าใช้จ่าย</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg">
              ทีมผู้เชี่ยวชาญพร้อมตอบคำถามและให้คำปรึกษาแก่ท่าน ติดต่อเราได้ทันที
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <ScrollReveal direction="right" delay={0.1}>
              <GlassCard className="p-6 border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      เบอร์โทรศัพท์ติดต่อ
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-bold text-white hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.mobile}`}
                      className="text-sm text-slate-300 hover:text-[#C5A059] transition-colors block mt-0.5"
                    >
                      {SITE_CONFIG.mobile} (สายด่วน)
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <GlassCard className="p-6 border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      อีเมล & Line Official
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-white hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <div className="text-sm text-slate-300 mt-1">
                      Line ID: <span className="text-amber-300 font-semibold">{SITE_CONFIG.line}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <GlassCard className="p-6 border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      ที่ตั้งสำนักงาน
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <GlassCard className="p-6 border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      เวลาทำการ
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      {SITE_CONFIG.workingHours}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      (หยุดวันเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์)
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

          </div>

          {/* Right Side: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <GlassCard className="p-8 sm:p-10 border border-amber-500/30 gold-glow relative">
                
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                  ส่งข้อความถึงเรา
                </h3>
                <p className="text-slate-300 text-sm mb-8">
                  กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>

                {submitted ? (
                  <div className="bg-emerald-500/15 border border-emerald-500/40 rounded-2xl p-8 text-center animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2 font-serif">
                      ได้รับข้อมูลเรียบร้อยแล้ว
                    </h4>
                    <p className="text-slate-300 text-sm">
                      ขอบคุณที่ไว้วางใจ KPR ACCOUNTING เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุดครับ
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          ชื่อ - นามสกุล / ชื่อบริษัท *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="กรุณากรอกชื่อของคุณ"
                          className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#C5A059] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          เบอร์โทรศัพท์ติดต่อ *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="08X-XXX-XXXX"
                          className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#C5A059] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#C5A059] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          บริการที่สนใจ
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#C5A059] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-colors"
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
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        ข้อความ / รายละเอียดที่ต้องการปรึกษา
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="รายละเอียดธุรกิจ หรือ คำถามที่ต้องการปรึกษา..."
                        className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#C5A059] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      ส่งข้อความขอคำปรึกษา <Send className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </form>
                )}

              </GlassCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
