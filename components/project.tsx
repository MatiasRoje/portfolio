"use client";

import { projectsData } from "@/lib/data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="hover: group relative mb-3 max-w-[50rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 last:mb-0 sm:mb-8 sm:max-h-max sm:pr-8">
        <div className="flex h-full flex-col px-5 pb-8 pt-4 sm:max-w-[40%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-auto">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-justify leading-relaxed text-gray-700">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-blue-500/[0.85] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-6">
            <a
              className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-blue-950 focus:scale-[1.15] active:scale-105"
              href={liveUrl}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ fontSize: 24 }}
              />
            </a>

            <a
              className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
              href={githubUrl}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 26 }} />
            </a>
          </div>
        </div>
        <a href={liveUrl} target="_blank">
          <Image
            src={imageUrl}
            alt={`${title} landing page`}
            quality={90}
            className="absolute -right-40 top-0 hidden min-h-full w-[36rem] cursor-pointer bg-contain transition
        hover:-translate-x-3
        hover:translate-y-3
        hover:-rotate-2
        hover:scale-[1.04]
        group-even:-left-40

        group-even:right-[initial]
        group-even:hover:translate-x-3
        group-even:hover:translate-y-3 group-even:hover:rotate-2 sm:block"
          />
        </a>
      </section>
    </motion.div>
  );
}

export default Project;
