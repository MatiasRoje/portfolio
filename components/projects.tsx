"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { useLanguage } from "@/context/language-context";

function Projects() {
  const { ref } = useSectionInView("Projects");
  const { language } = useLanguage();

  return (
    <section className="mb-16 scroll-mt-28 sm:mb-40" id="projects" ref={ref}>
      <SectionHeading>
        {" "}
        {language === "en" ? (
          <>Projects</>
        ) : language === "de" ? (
          <>Projekte</>
        ) : (
          <>Proyectos</>
        )}
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
