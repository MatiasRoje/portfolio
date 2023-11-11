"use client";

import Image from "next/image";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

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
  return (
    <section
      className="mb-14 max-w-full scroll-mt-28 sm:mb-40 sm:max-w-[36rem]"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
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
              src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
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
