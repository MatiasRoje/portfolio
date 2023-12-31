"use client";

import Image from "next/image";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className="mb-16 max-w-full scroll-mt-28 sm:mb-40 sm:max-w-[36rem]"
      id="skills"
      ref={ref}
    >
      <SectionHeading>
        {" "}
        {language === "en" ? (
          <>My skills</>
        ) : language === "de" ? (
          <>Meine Fähigkeiten</>
        ) : (
          <>Mis habilidades</>
        )}
      </SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={`https://skillicons.dev/icons?i=${skill}&theme=${
                theme === "light" ? "dark" : "light"
              }`}
              alt={`${skill} icon`}
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
