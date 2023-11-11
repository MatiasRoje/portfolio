import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import React from "react";

function Projects() {
  return (
    <section className="mb-14 scroll-mt-28 sm:mb-40" id="projects">
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
