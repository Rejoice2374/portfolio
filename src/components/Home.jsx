import React from "react";
import { Hero, Projects, Cta, Services, Skills } from "./Home/index";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Skills />
      <Projects />
      <Cta />
    </div>
  );
};

export default Home;
