"use client";

import { useLanguage } from "@/context/language-context";

function FooterUserSection() {
  const { language } = useLanguage();

  return (
    <p className="font-semibold sm:text-base">
      {language === "en" ? (
        <>
          © 2023 by{" "}
          <a
            href="https://github.com/MatiasRoje"
            target="_blank"
            className="hover:underline"
          >
            Matías Roje
          </a>
          . All rights reserved.
        </>
      ) : language === "de" ? (
        <>
          © 2023 von{" "}
          <a
            href="https://github.com/MatiasRoje"
            target="_blank"
            className="hover:underline"
          >
            Matías Roje
          </a>
          . Alle Rechte vorbehalten.
        </>
      ) : (
        <>
          © 2023 por{" "}
          <a
            href="https://github.com/MatiasRoje"
            target="_blank"
            className="hover:underline"
          >
            Matías Roje
          </a>
          . Todos los derechos reservados.
        </>
      )}
    </p>
  );
}

export default FooterUserSection;
