"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "zh" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "zh",
  setLang: () => {},
  t: (zh) => zh,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("vd-lang") as Lang | null;
    if (saved === "zh" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("vd-lang", l);
  };

  const t = (zh: string, en: string) => (lang === "en" ? en : zh);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
