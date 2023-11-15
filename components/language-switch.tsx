import { useLanguage } from "@/context/language-context";

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="rounded border border-blue-600 bg-blue-600 p-0.5 text-xs font-medium text-gray-100 hover:scale-110 hover:bg-blue-700 hover:text-white focus:scale-110 dark:border-gray-100 dark:bg-gray-100 dark:text-blue-600"
      onClick={toggleLanguage}
    >
      {language === "en" && "EN"}
      {language === "de" && "DE"}
      {language === "es" && "ES"}
    </button>
  );
}

export default LanguageSwitch;
