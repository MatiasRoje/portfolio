"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="mb-14 scroll-mt-28 sm:mb-40" id="projects" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
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
