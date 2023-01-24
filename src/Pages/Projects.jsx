import React from "react";

import Title from "../components/Title";
import { projects } from "./../components/DataProjects";
import CardProjects from "./../components/CardProjects";

const Projects = () => {
  return (
    <div className="px-8 py-20 bg-blue-dark w-full">
      <div className="max-w-[1000px] mx-auto flex items-center flex-col">
        <Title title="Projects" />
        <div className="w-full sm:w-[70%] md:w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <CardProjects
                key={project.id}
                img={project.image}
                url={project.url}
                website={project.url}
                github={project.git}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
