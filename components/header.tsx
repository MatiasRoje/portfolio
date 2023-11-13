"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faLaptop,
  faLightbulb,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-50">
      <motion.div
        className="fixed left-1/2 top-0 h-12 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-blue-600 dark:bg-opacity-80 sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-blue-600 dark:text-gray-50 sm:w-[initial] sm:flex-nowrap sm:gap-8">
          <motion.li
            className="relative flex h-3/4 items-center justify-center pb-1"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/#home"
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
              )}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection("Home");
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ fontSize: 20 }} />
            </Link>
            {"Home" === activeSection && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-md border-b border-blue-600/60 dark:border-gray-50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center pb-1"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/#about"
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
              )}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection("About");
              }}
            >
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
            </Link>
            {"About" === activeSection && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-md border-b border-blue-600/60 dark:border-gray-50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center pb-1"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/#skills"
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
              )}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection("Skills");
              }}
            >
              <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: 20 }} />
            </Link>
            {"Skills" === activeSection && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-md border-b border-blue-600/60 dark:border-gray-50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center pb-1"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="/#projects"
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
              )}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection("Projects");
              }}
            >
              <FontAwesomeIcon icon={faLaptop} style={{ fontSize: 20 }} />
            </Link>
            {"Projects" === activeSection && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-md border-b border-blue-600/60 dark:border-gray-50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#contact"
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 outline-none transition hover:scale-110 hover:text-blue-700 focus:scale-110 dark:hover:text-white"
              )}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection("Contact");
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />
            </Link>
            {"Contact" === activeSection && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-md border-b border-blue-600/60 dark:border-gray-50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </motion.li>
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThemeSwitch />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
