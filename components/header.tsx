"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faLaptop,
  faLightbulb,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="relative z-50">
      <motion.div
        className="fixed left-1/2 top-0 h-12 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-gray-800 sm:w-[initial] sm:flex-nowrap sm:gap-8">
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#home"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faHome} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#about"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#skills"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#projects"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faLaptop} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#contact"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#"
              className="flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 focus:scale-110"
            >
              <FontAwesomeIcon icon={faMoon} style={{ fontSize: 20 }} />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
