"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "en" | "de" | "es";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("de");
      window.localStorage.setItem("language", "de");
    }

    if (language === "de") {
      setLanguage("es");
      window.localStorage.setItem("language", "es");
    }

    if (language === "es") {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      const userLanguage = navigator.language;
      if (userLanguage.startsWith("de")) {
        setLanguage("de");
      } else if (userLanguage.startsWith("es")) {
        setLanguage("es");
      } else {
        // Default to English
        setLanguage("en");
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
