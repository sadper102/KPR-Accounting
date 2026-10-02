"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageCircle,
  Facebook,
  Loader2,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "accounting",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            (lang === "th"
              ? "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง"
              : "Failed to send message. Please try again.")
        );
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "accounting",
        message: "",
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    } catch (err: any) {
      setErrorMessage(
        err?.message ||
          (lang === "th"
            ? "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง"
            : "Failed to send message. Please try again.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block">
              {t.contact.badge}
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2240] mt-4 mb-6 leading-tight [text-wrap:balance]">
              {t.contact.title} <span className="text-[#C5A059] whitespace-nowrap">{t.contact.titleHighlight}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#334155] text-base sm:text-lg font-medium max-w-2xl mx-auto [text-wrap:balance]">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <ScrollReveal direction="right" delay={0.1}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.phoneDirect}
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-extrabold text-[#0D2240] hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <span className="text-xs text-[#64748B] font-medium block mt-0.5">
                      {lang === "th" ? "พร้อมให้คำปรึกษาเบื้องต้นฟรี" : "Free initial consultation available"}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.companyInfoTitle}
                    </div>
                    <div className="text-sm font-bold text-[#0D2240]">
                      {lang === "th" ? SITE_CONFIG.companyName : SITE_CONFIG.companyNameEn}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.emailAddress}
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-[#0D2240] hover:text-[#C5A059] transition-colors block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <span className="text-xs text-[#64748B] font-medium block mt-0.5">
                      {lang === "th" ? "ติดต่อสอบถามหรือส่งเอกสารทางอีเมล" : "Contact or send documents via email"}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.25}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="shrink-0 bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
                    <Image
                      src={SITE_CONFIG.lineQrCode}
                      alt="LINE Official QR Code"
                      width={120}
                      height={120}
                      className="rounded-lg object-contain w-28 h-28"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.lineOA}
                    </div>
                    <div className="text-base font-bold text-[#0D2240] mb-1">
                      {lang === "th" ? "สแกน QR Code เพื่อแอด LINE" : "Scan QR Code to Add LINE"}
                    </div>
                    <p className="text-xs text-[#64748B] font-medium mb-3">
                      {lang === "th"
                        ? "ปรึกษาทีมงานผู้สอบบัญชีและภาษีได้สะดวกรวดเร็ว"
                        : "Connect with our accounting and tax team directly"}
                    </p>
                    <a
                      href={SITE_CONFIG.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.contact.addFriend}</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.28}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1877F2] shrink-0 mt-0.5">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.facebookPage}
                    </div>
                    <a
                      href={SITE_CONFIG.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#0D2240] hover:text-[#1877F2] transition-colors block"
                    >
                      KPR Accounting
                    </a>
                    <span className="text-xs text-[#64748B] font-medium block mt-0.5 mb-3">
                      {lang === "th"
                        ? "ติดตามสาระความรู้บัญชีและภาษี หรือติดต่อปรึกษาผ่านข้อความเพจ"
                        : "Follow tax & accounting insights or message us via Facebook"}
                    </span>
                    <a
                      href={SITE_CONFIG.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>{t.contact.visitFacebook}</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.registeredAddress}
                    </div>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
                      {lang === "th" ? SITE_CONFIG.address : "735/1 Building A, Room A147-148, 1st Fl., Srinakarin Rd., Phatthanakan, Suan Luang, Bangkok 10250"}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="executive-card p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0D2240] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-1">
                      {t.contact.officeHours}
                    </div>
                    <p className="text-xs sm:text-sm text-[#0D2240] font-bold">
                      {t.contact.workingDays}
                    </p>
                    <p className="text-xs text-[#475569] font-medium mt-0.5">
                      {t.contact.holidayNotice}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Side: Clean High-Contrast Executive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="executive-card p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-md">
                
                <h3 className="text-2xl font-bold text-[#0D2240] mb-2">
                  {t.contact.formTitle}
                </h3>
                <p className="text-[#475569] text-sm mb-8 font-normal">
                  {lang === "th" ? "กรอกรายละเอียดเบื้องต้น ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง" : "Fill out your details below and our CPA team will respond within 24 hours."}
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[#0D2240] mb-2">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-[#334155] text-sm font-medium">
                      {t.contact.successDesc}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-start gap-3 animate-fade-in">
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                        <div>
                          <p className="font-semibold">{lang === "th" ? "ไม่สามารถส่งข้อความได้" : "Unable to send message"}</p>
                          <p className="text-xs text-red-600 mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                          {t.contact.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.contact.namePlaceholder}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0D2240] rounded-xl px-4 py-3 text-[#0D2240] font-medium text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                          {t.contact.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.contact.phonePlaceholder}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0D2240] rounded-xl px-4 py-3 text-[#0D2240] font-medium text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                          {t.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.contact.emailPlaceholder}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0D2240] rounded-xl px-4 py-3 text-[#0D2240] font-medium text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                          {t.contact.serviceLabel}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0D2240] rounded-xl px-4 py-3 text-[#0D2240] font-medium text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors"
                        >
                          <option value="accounting">{lang === "th" ? "บริการด้านบัญชี" : "Accounting Services"}</option>
                          <option value="taxation">{lang === "th" ? "บริการด้านภาษี" : "Tax Advisory & Filing"}</option>
                          <option value="registration">{lang === "th" ? "จดทะเบียนบริษัท" : "Company Registration"}</option>
                          <option value="audit">{lang === "th" ? "ตรวจสอบบัญชี" : "Financial Audit (CPA)"}</option>
                          <option value="payroll">{lang === "th" ? "ประกันสังคม & เงินเดือน" : "Social Security & Payroll"}</option>
                          <option value="other">{lang === "th" ? "ปรึกษาเรื่องอื่นๆ" : "Other Services"}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#0D2240] rounded-xl px-4 py-3 text-[#0D2240] font-medium text-sm focus:outline-none focus:ring-1 focus:ring-[#0D2240] transition-colors resize-none placeholder:text-slate-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="navy"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                          <span>{lang === "th" ? "กำลังส่งข้อความ..." : "Sending..."}</span>
                        </>
                      ) : (
                        <>
                          {t.contact.submitBtn} <Send className="w-4 h-4 ml-2 inline" />
                        </>
                      )}
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
