"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-white border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[#0A1628] font-extrabold text-xs uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300 shadow-sm inline-block">
              TESTIMONIALS — เสียงตอบรับจากลูกค้า
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mt-4 mb-6">
              ความประทับใจจาก <span className="text-[#94670A]">ผู้ประกอบการจริง</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#1E293B] text-base sm:text-lg font-medium">
              ความไว้วางใจของลูกค้าคือสิ่งที่เราภาคภูมิใจและยึดมั่นพัฒนาบริการเสมอ
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Card */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto relative">
            <div className="executive-card rounded-3xl p-8 sm:p-12 bg-white border border-slate-300 shadow-xl relative">
              
              <Quote className="w-12 h-12 text-slate-300 absolute top-6 right-6 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[...Array(TESTIMONIALS[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[#0A1628] text-base sm:text-xl lg:text-2xl leading-relaxed italic mb-8 font-bold">
                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
              </p>

              {/* Author details */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div>
                  <div className="text-[#0A1628] font-extrabold text-lg">
                    {TESTIMONIALS[activeIndex].author}
                  </div>
                  <div className="text-[#94670A] text-xs sm:text-sm font-extrabold">
                    {TESTIMONIALS[activeIndex].position} — {TESTIMONIALS[activeIndex].company}
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0A1628] text-[#0A1628] hover:text-white flex items-center justify-center transition-colors border border-slate-300 cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0A1628] text-[#0A1628] hover:text-white flex items-center justify-center transition-colors border border-slate-300 cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 bg-[#0A1628]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
