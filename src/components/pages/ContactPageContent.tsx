"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <PageHeader
        badge={t.contact.badge}
        title={t.contact.title}
        titleHighlight={t.contact.titleHighlight}
        description={t.contact.subtitle}
        breadcrumbs={[{ label: t.nav.contact }]}
      />

      {/* Embedded Contact Component */}
      <div className="-mt-8">
        <Contact />
      </div>
    </div>
  );
}
