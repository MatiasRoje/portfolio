"use client";

import { useTheme } from "@/context/theme-context";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} style={{ fontSize: 20 }} />
      ) : (
        <FontAwesomeIcon icon={faSun} style={{ fontSize: 20 }} />
      )}
    </button>
  );
}

export default ThemeSwitch;
