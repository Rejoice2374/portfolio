import React from "react";
import { Hero, Projects2, Cta, Services, Skills } from "./Home/index";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Skills />
      <Projects2 />
      <Cta />
    </div>
  );
};

export default Home;
