import React from "react";

import useScript from "../hooks/useScript";
import Hobbies from "./Hobbies";

import "../styles/about.sass";

export default function AboutMe(props) {

  useScript('https://kit.fontawesome.com/45487d7142.js')
  useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')

  return (
    <div class="about-me" id="aboutme">
      <div className="animation-container">
        <h1 class="group-title">About Me</h1>
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_eitto98h.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}}  loop autoplay></lottie-player>
        <img src={window.location.origin + "/man_in_park.gif"} alt="gif animation of man in park looking from side to side" />
      </div>
      <div className="text-container">
        <Hobbies />
      </div>
    </div>
  )
}