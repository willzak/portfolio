import React from "react";
import Landing from "./landing";
import AboutMe from "./about";
import Projects from "./Projects";
import Ending from "./Ending";

import "../styles/index.sass";

export default function WebContainer(props) {
  return (
    <div class="background">
      <Landing />
      <AboutMe />
      <Projects />
      <Ending />
    </div>
  )
}
