"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        After many years in the service industry and a background as a
        photographer, I embarked on a transformative journey into programming,
        completing a{" "}
        <span className="font-bold">Full-Stack Web Development </span>
        bootcamp at Le Wagon in Berlin. I&apos;m passionate about
        problem-solving, and the excitement of finding solutions drives my
        commitment to this field. My core tech stack includes{" "}
        <span className="font-bold">
          React, Next.js, TypeScript, Node.js
        </span>{" "}
        and <span className="font-bold">MongoDB</span>, with additional
        proficiency in <span className="font-bold">Ruby</span> and{" "}
        <span className="font-bold">Ruby on Rails</span>. Keeping abreast of
        industry trends through conferences, online courses, and experimentation
        with emerging technologies, I craft functional, visually appealing and
        user-friendly designs. I&apos;am on the lookout for a{" "}
        <span className="font-bold">full-time position </span>
        as a software developer.
      </p>

      <p className="text-justify">
        When I&apos;m not coding, I enjoy playing chess, diving into various
        water sports and traveling. Socializing with friends and maintaining a
        fitness lifestyle are very important to me, fostering a harmonious blend
        of mental challenges and physical well-being. Beyond that, my love for
        learning extends to a passion for languages and exploring diverse
        cultures.
      </p>
    </motion.section>
  );
}

export default About;
