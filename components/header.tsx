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
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-12 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-gray-800 sm:w-[initial] sm:flex-nowrap sm:gap-8">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#home"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faHome}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#about"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#skills"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#projects"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faLaptop}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#contact"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#"
              className="flex w-full items-center justify-center px-3 py-3"
            >
              <FontAwesomeIcon
                icon={faMoon}
                style={{ fontSize: 20 }}
                className="hover:scale-110 transition"
              />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
