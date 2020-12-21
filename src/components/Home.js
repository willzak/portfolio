import React from "react";

import Landing from "./landing";
import AboutMe from "./about";
import Projects from "./Projects";
import Ending from "./Ending";
import Nav from "./Nav";

import "../styles/index.sass";

export default function Home(props) {
  return (
    <div class="background">
      <Nav />
      <Landing />
      <AboutMe />
      <Projects />
      <Ending />
    </div>
  )
}