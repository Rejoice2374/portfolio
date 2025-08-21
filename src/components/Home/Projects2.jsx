import { useState } from "react";
import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";

const Projects2 = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section
      className="flex flex-col items-center self-stretch justify-center bg-black pb-[50px] relative md:py-[40px] py-[20px] font-work"
      id="project"
    >
      <div className="projects-container">
        <div className="project-intro">
          <h2 className="lg:text-[36px] text-[22.4px] font-work font-semibold lg:leading-[42.8px] leading-[22.4px] text-center">
            Projects
          </h2>
          <p className="text-center text-coolAsh leading-[30px]">
            Favochino is a versatile developer with a passion for creating
            innovative solutions. With expertise in web development and design,
            using technologies like React, Node.js, Material UI, Tailwind CSS
            and so many other modern day technology. These are few of my works.
            <br />
          </p>
        </div>

        {/* Optional filter controls */}
        <div className="filter-control flex flex-1 items-start relative lg:w-[1050px] md:w-[690px] w-[315px] lg:mx[-80px]">
          <div
            className={`filter-item flex items-center ${
              filter === "all" ? "active" : ""
            } border-coolAsh flex-1 gap-4 h-[60px] md:px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("all")}>
              <div className="filter-link flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work md:font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    filter === "all" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  All
                </h2>
              </div>
            </button>
          </div>
          <div
            className={`filter-item flex items-center ${
              filter === "development" ? "active" : ""
            } flex-1 gap-4 h-[60px] md:px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("development")}>
              <div className="filter-link flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    filter === "development" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Developments
                </h2>
              </div>
            </button>
          </div>

          <div
            className={`filter-item flex items-center ${
              filter === "design" ? "active" : ""
            } border-coolAsh flex-1 gap-4 h-[60px] md:px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("design")}>
              <div className="filter-link flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    filter === "design" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Designs
                </h2>
              </div>
            </button>
          </div>
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {projects
            .filter((project) => {
              if (filter === "all") return true;
              return project.description.toLowerCase().includes(filter);
            })
            .map((project, index) => (
              <ProjectCard
                key={index}
                url={project.imgUrl}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
