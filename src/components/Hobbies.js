import React from "react";
import Button from "@material-ui/core/Button"

import "../styles/hobbies.sass";

export default function Hobbies(props) {

  return (
    <div className="about-container">
      <div className="paragraph">I have an insatiable appetite for languages, to date I have studied: French, Italian, Portuguese, Swedish, Japanese, Russian, and Korean, along with my native English. Although my fluency varies, one thing remains the same - you always look like an idiot when you're learning.</div>
      <br/>
      <div className="paragraph">Despite this sadistic process, languages shape how we see the world and the ways in which we interact with it. Using language as a medium, I hope to learn how to create and design products that can better serve and help their user base by understanding them.</div>
      <br/>
      <div className="contacts">
        <Button color="primary" href="https://www.linkedin.com/in/williamzak/" target="_blank">LinkedIn</Button>
        <Button color="primary" href="mailto:williamzak0@gmail.com">Email</Button>
      </div>
    </div>
  )
}