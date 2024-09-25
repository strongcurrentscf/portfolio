import React from "react";
import { SectionHeading, Project } from "components";
import { projectsData } from "lib";
import { useSectionInView } from "hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects" });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
