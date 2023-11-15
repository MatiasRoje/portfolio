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
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();

  return (
    <section
      className="mb-16 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
      ref={ref}
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
        className="mb-12 mt-10 px-4 text-justify text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === "en" ? (
          <>
            Hello, I&apos;m <span className="font-bold">Matías Roje.</span>{" "}
            I&apos;m a <span className="font-bold">Full-Stack Developer</span>{" "}
            with focus in <span className="font-bold">React </span>
            <span className="italic">(Next.js, TypeScrypt, Node.js)</span> and
            additional expertise in <span className="italic">Ruby</span> and
            <span className="italic"> Ruby on Rails</span>.
          </>
        ) : language === "de" ? (
          <>
            Hallo, ich bin <span className="font-bold">Matías Roje</span>. Ich
            bin ein <span className="font-bold">Full-Stack-Entwickler</span> mit
            Fokus auf <span className="font-bold">React </span>
            <span className="italic">(Next.js, TypeScript, Node.js)</span> und
            zusätzlicher Expertise in <span className="italic">Ruby</span> und{" "}
            <span className="italic">Ruby on Rails</span>.
          </>
        ) : (
          <>
            Hola, soy <span className="font-bold">Matías Roje</span>. Soy un{" "}
            <span className="font-bold">desarrollador Full-Stack</span> con
            enfoque en <span className="font-bold">React </span>
            <span className="italic">(Next.js, TypeScript, Node.js)</span> y
            experiencia adicional en <span className="italic">Ruby</span> y{" "}
            <span className="italic">Ruby on Rails</span>.
          </>
        )}
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
          className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-gray-50 outline-none transition hover:scale-110 hover:bg-blue-700 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {language === "en" ? (
            <>Contact me</>
          ) : language === "de" ? (
            <>Kontaktiere mich</>
          ) : (
            <>Contáctame</>
          )}{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: 18 }}
            className="opacity-80 transition group-hover:translate-x-0.5"
          />
        </Link>

        {language === "en" ? (
          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-gray-700"
            href="/EN_CV.pdf"
            download
          >
            Download CV{" "}
            <FontAwesomeIcon
              icon={faFileArrowDown}
              style={{ fontSize: 18 }}
              className="opacity-80 transition group-hover:translate-y-0.5"
            />
          </a>
        ) : language === "de" ? (
          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-gray-700"
            href="/DE_CV.pdf"
            download
          >
            CV herunterladen{" "}
            <FontAwesomeIcon
              icon={faFileArrowDown}
              style={{ fontSize: 18 }}
              className="opacity-80 transition group-hover:translate-y-0.5"
            />
          </a>
        ) : (
          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-gray-700"
            href="/ES_CV.pdf"
            download
          >
            Descargar CV{" "}
            <FontAwesomeIcon
              icon={faFileArrowDown}
              style={{ fontSize: 18 }}
              className="opacity-80 transition group-hover:translate-y-0.5"
            />
          </a>
        )}

        <div className="flex gap-3">
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-gray-700 dark:text-gray-300"
            href="https://www.linkedin.com/in/mat%C3%ADas-roje-carrasco-2a2673273/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20 }} />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-gray-700 dark:text-gray-300"
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
