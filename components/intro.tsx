"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Intro() {
  return (
    <section
      className="mb-14 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/portrait.jpg"
              alt="Matías portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover object-top shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-justify text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m <span className="font-bold">Matías Roje.</span> I&apos;m
        a <span className="font-bold">Full-Stack Developer</span> with focus in{" "}
        <span className="font-bold">React </span>
        <span className="italic">(Next.js, TypeScrypt, Node.js)</span> and
        additional expertise in <span className="italic">Ruby</span> and
        <span className="italic"> Ruby on Rails</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: 18 }}
            className="opacity-80 transition group-hover:translate-x-0.5"
          />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/5 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <FontAwesomeIcon
            icon={faFileArrowDown}
            style={{ fontSize: 18 }}
            className="opacity-80 transition group-hover:translate-y-0.5"
          />
        </a>
        <div className="flex gap-3">
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/5 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
            href="https://www.linkedin.com/in/mat%C3%ADas-roje-carrasco-2a2673273/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20 }} />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/5 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
            href="https://github.com/MatiasRoje"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
