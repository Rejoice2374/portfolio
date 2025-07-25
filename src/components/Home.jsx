import React from "react";
import { Hero, Projects, Projects2, Cta, Services, Skills } from "./Home/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects2 />
      <Cta />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
