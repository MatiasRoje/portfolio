"use client";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ThemeSwitch() {
  return (
    <button className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110">
      <FontAwesomeIcon icon={faMoon} style={{ fontSize: 20 }} />
    </button>
  );
}

export default ThemeSwitch;
