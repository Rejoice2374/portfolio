import { useState } from "react";
import { projects } from "../../constants"; // Adjust the import path to where your JSON file is
import ProjectCard from "./ProjectCard"; // Assuming ProjectCard is in a separate file

const Projects2 = () => {
  const [filter, setFilter] = useState("all"); // Optional: for filtering projects

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      {/* Optional filter controls */}
      <div className="project-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("development")}>Development</button>
        <button onClick={() => setFilter("design")}>Design</button>
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
            />
          ))}
      </div>
    </section>
  );
};

export default Projects2;
