import React from "react";
import { Hero, Projects, Cta, Services, Skills } from "./Home/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Cta />
      <Services />
    </div>
  );
};

export default Home;
