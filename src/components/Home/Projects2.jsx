import { useState } from "react";
import { projects } from "../../constants"; // Adjust the import path to where your JSON file is
import ProjectCard from "./ProjectCard"; // Assuming ProjectCard is in a separate file
import styles from "../../style";

const Projects2 = () => {
  const [filter, setFilter] = useState("all"); // Optional: for filtering projects

  return (
    <section className={styles.section1}>
      <div className="projects-container">
        <div className="project-intro">
          <h2>Projects</h2>
          <p className="text-center text-coolAsh leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Optional filter controls */}
        <div className="flex flex-1 items-start relative lg:w-[1050px] md:w-[690px] w-[315px] lg:mx[-80px]">
          <div
            className={`flex items-center ${
              filter === "all" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("all")}>
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    filter === "all" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  All
                </h2>
              </div>
            </button>
          </div>
          <div
            className={`flex items-center ${
              filter === "development" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("development")}>
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    filter === "development" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Designs
                </h2>
              </div>
            </button>
          </div>

          <div
            className={`flex items-center ${
              filter === "design" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <button onClick={() => setFilter("design")}>
              <div className="flex items-center gap-2.5 text-white">
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
