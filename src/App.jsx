import React from "react";
import { Navbar, Hero, Projects, Cta, Services, Footer } from "../components";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div>
        <Projects />
        <Cta />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default App;
