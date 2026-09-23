"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof TRANSLATIONS["th"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("th");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem("kpr_lang") as Language;
      if (savedLang === "th" || savedLang === "en") {
        setLangState(savedLang);
      }
    } catch {
      // localStorage may not be available
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("kpr_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "th" ? "en" : "th");
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.th;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return fallback if used outside provider
    return {
      lang: "th" as Language,
      setLang: () => {},
      toggleLang: () => {},
      t: TRANSLATIONS.th,
    };
  }
  return context;
}
