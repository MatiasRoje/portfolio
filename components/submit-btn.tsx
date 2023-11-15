import { useLanguage } from "@/context/language-context";
import React from "react";

import { useFormStatus } from "react-dom";

export function SubmitBtn() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();

  return (
    <button
      type="submit"
      className="flex h-[3rem] w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-white outline-none transition-all hover:bg-blue-700 focus:bg-blue-700 active:scale-[1.02] disabled:bg-gray-400 disabled:bg-opacity-80"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : language === "en" ? (
        "Submit"
      ) : language === "de" ? (
        "Absenden"
      ) : (
        "Enviar"
      )}
    </button>
  );
}

export default SubmitBtn;
