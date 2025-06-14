import React, { useState } from "react";
import { projects } from "../../constants";
import styles from "../../style";
import TabButton from "../Tabs";

const Designs = () => {
  return (
    <section className={`projects-container`}>
      <div
        className={`item-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}
      >
        {projects.map((proj, index) => (
          <div key={index} className="project">
            <div className="proj-txtx">
              <h4>{proj.title}</h4>
              <span>{proj.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Development = () => {
  return (
    <section className={`projects-container`}>
      <div
        className={`items-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}
      >
        {projects.map((proj, index) => (
          <div key={index} className="project">
            <div className="proj-txtx">
              <h4>{proj.title}</h4>
              <span>{proj.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BrandDesigns = () => {
  return (
    <section className={`projects-container`}>
      <div className="{`item-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}">
        {projects.map((proj, index) => (
          <div key={index} className="project">
            <div className="proj-txtx">
              <h4>{proj.title}</h4>
              <span>{proj.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [tab, setTab] = useState("Designs");

  return (
    <section className={styles.section1}>
      <div className="projects-container">
        <div className="project-intro">
          <h2>Projects</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-1 items-start relative lg:w-[1050px] md:w-[690px] w-[315px] lg:mx[-80px]">
          <div
            className={`flex items-center ${
              tab === "Designs" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <TabButton
              isActive={tab === "Designs"}
              action={() => setTab("Designs")}
            >
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    tab === "Designs" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Designs
                </h2>
              </div>
            </TabButton>
          </div>
          <div
            className={`flex items-center  ${
              tab === "Development" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <TabButton
              isActive={tab === "Development"}
              action={() => setTab("Development")}
            >
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    tab === "Development" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Development
                </h2>
              </div>
            </TabButton>
          </div>
          <div
            className={`flex items-center  ${
              tab === "Brand Designs" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <TabButton
              isActive={tab === "Brand Designs"}
              action={() => setTab("Brand Designs")}
            >
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    tab === "Brand Designs" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Brand Designs
                </h2>
              </div>
            </TabButton>
          </div>
        </div>

        <hr />
        {tab === "Designs" && <Designs />}
        {tab === "Development" && <Development />}
        {tab === "Brand Designs" && <BrandDesigns />}
      </div>
    </section>
  );
};

export default Projects;
