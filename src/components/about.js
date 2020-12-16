import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import useScript from "../hooks/useScript";
import Hobbies from "./Hobbies";
import Experience from "./Experience";
import Contact from "./Contact";

import "../styles/about.sass";

export default function AboutMe(props) {

  useScript('https://kit.fontawesome.com/45487d7142.js')

  return (
    <div class="about-me" id="aboutme">
      <h1 class="group-title">About Me</h1>
      <Router>
        <div class="options-container">
          <Link to="/me" className="link">
            <button class="btn btn-1">Background</button>
          </Link>
          <Link to="/experience" className="link">
            <button class="btn btn-2">Experience</button>
          </Link>
          <Link to="/contact" className="link">
            <button class="btn btn-3">Contact</button>
          </Link>
        </div>
          <div class="options-window">
            <Route exact path="/"><Hobbies /></Route>
            <Route path="/me"><Hobbies /></Route>
            <Route path="/experience"><Experience /></Route>
            <Route path="/contact"><Contact /></Route>
          </div>
      </Router>
    </div>
  )
}