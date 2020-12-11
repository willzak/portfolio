import React from "react";
import Landing from "./landing";
import AboutMe from "./about";
import Projects from "./Projects";
import Footer from "./Footer";

import "../styles/index.sass";

export default function WebContainer(props) {
  return (
    <div class="background">
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}
