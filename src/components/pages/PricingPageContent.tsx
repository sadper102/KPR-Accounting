"use client";

import React from "react";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingPageContent() {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge={t.pricing.badge}
        title={t.pricing.title}
        titleHighlight={t.pricing.titleHighlight}
        description={t.pricing.subtitle}
        breadcrumbs={[{ label: t.nav.pricing }]}
      />

      {/* Main Pricing Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {t.pricing.packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 sm:p-10 border transition-all flex flex-col justify-between relative ${
                  pkg.popular
                    ? "border-2 border-[#0D2240] shadow-xl ring-4 ring-[#0D2240]/5"
                    : "border-[#E2E8F0] shadow-sm hover:border-[#C5A059]/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0D2240] text-[#C5A059] text-xs font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                    {t.pricing.popularBadge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D2240] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#475569] text-xs sm:text-sm mb-6 min-h-[40px] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      {"prefix" in pkg && pkg.prefix && (
                        <span className="text-[#64748B] text-sm sm:text-base font-semibold">
                          {pkg.prefix}
                        </span>
                      )}
                      <span className="text-4xl sm:text-5xl font-black text-[#0D2240] tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-[#64748B] text-sm font-semibold">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-[#0D2240] uppercase tracking-wider mb-2">
                      {lang === "th" ? "บริการที่รวมในแพ็กเกจ:" : "Included Services:"}
                    </div>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                        <Check className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  href="/contact"
                  variant={pkg.popular ? "navy" : "outline"}
                  size="md"
                  className="w-full justify-center font-bold"
                >
                  {t.pricing.chooseBtn}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Pricing Table */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              ADD-ON SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              {t.pricing.addOnTitle}
            </h2>
            <p className="text-[#334155] text-sm sm:text-base">
              {t.pricing.addOnSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="divide-y divide-[#E2E8F0]">
              {t.pricing.addOns.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="font-semibold text-[#0D2240] text-sm sm:text-base">
                    {item.service}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#C5A059] shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0D2240] font-bold text-xs uppercase tracking-widest bg-[#F8FAFC] px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs inline-block mb-3">
              {t.pricing.faqBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2240] mb-3">
              {t.pricing.faqTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {t.pricing.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0D2240] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#475569] text-sm sm:text-base leading-relaxed pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.pricing.ctaTitle}
        subtitle={t.pricing.ctaSubtitle}
      />
    </div>
  );
}
