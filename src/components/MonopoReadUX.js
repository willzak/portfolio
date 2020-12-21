import React, { Fragment } from "react";

import useScript from "../hooks/useScript"
import Nav from "./Nav"

import "../styles/ux.sass";

export default function DesignItem(props) {

  useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');

  return (
    <>
    <Nav home={false}/>
    <div className="ux-proj" id="top">
      <div className="head">
        <h1 className="title">MonopoRead</h1>
        <div className="context">
          <div className="context-item">
            <div className="context-title">Timeline:</div>
            <div>10 days, Nov/Dec 2020</div>
          </div>
          <div className="context-item">
            <div className="context-title">Role:</div>
            <div>UX + UI Design, Frontend Developer</div>
          </div>
        </div>
      </div>
      <div className="intro">
        <h2>The Reading Competition App that Promotes Minority Writers</h2>
        <div className="brief">MonopoRead (like Monopoly) uses a Monopoly board to create a multi-player challenge to read the most books the fastest. At its base it looks to recommend pieces by minority writers to promote those whose stories often go untold.</div>
      </div>
      <div className="body">

        <div className="body-item">
          <div className="section-title">
            <div>The Challenge</div>
            <div className="underline"></div>
          </div>
          <div className="section-content">The publishing industry remains largely homogenous in terms of the people working within it, and the characters respresented in its stories. Additionally, the average Canadian only reads 1 book a year, meaning that writers have to beat out the Harry Potters of the world to get read. <strong>So how could we make reading more fun, and promote works by minority writers?</strong></div>
        </div>

        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_K7aZUG.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}}  loop  autoplay></lottie-player>

        <div className="body-item">
          <div className="section-title">
            <div>The Project</div>
            <div className="underline"></div>
          </div>
          <div className="section-body">
            <div className="section-content">MonopoRead is an <strong>asynchronous, multi-player game</strong> that my team created as our final project as part of our Web Development Bootcamp at <a href="https://www.lighthouselabs.ca/en/web-development-bootcamp">Lighthouse Labs</a>. I worked as the <strong>prinicpal designer</strong> for the project, as well as <strong>one of the two frontend developers</strong>.</div>
            <br/>
            <div className="section-content">My main work for the project centered around the functionality and development of the game board.</div>
            <br/>
            <div className="section-content"><strong>Design Tools Used:</strong> Figma, Adobe Photoshop, Draw.io</div>
            <div className="section-content"><strong>Design Methods Used:</strong> Interviews, Wireframes, ERD Diagrams, Prototyping</div>
          </div>
        </div>

        <div className="body-item">
          <div className="section-title">
            <div>The Process</div>
            <div className="underline"></div>
          </div>
          <div className="section-body">
            <div className="section-content"><strong>UX Design</strong></div>
            <br />
            <div className="section-content">The <strong>main considerations</strong> for the game design included:</div>
            <ul>
              <li><a><strong>Intuitivity</strong></a>: It doesn't take much to make a game overly complex, and the moment that happens the user stops enjoying it and logs off. Therefore it was essential to minimize the actions a user had to perform, and keep visuals clean.</li>
              <li><a><strong>Scope</strong></a>: In order to provide accurate book recommendations, we had to take into consideration our users': reading level, age, and language.</li>
              <li><a><strong>Stimulation</strong></a>: Since the game is asynchronous, we had to create ways to keep the user coming back each time they finished reading a book. Therefore we had to ensure users would be stimulated by the game by including animations, point systems, and creating competition within it.</li>
            </ul>
            <br />
            <div className="section-content"></div>
            <br />
            <div className="section-content"><strong>UI Design</strong></div>
            <div className="section-content">Majority of the colour scheme for the project came from the original Monopoly board colours. We decided to continue with these to keep the play on the game, but also because of its <strong>high contrast</strong> that made small writing on game tiles <strong>easy to read</strong>.</div>
            <br/>
            <div className="section-content">The typeface used was also used to keep with the Monopoly theme, but also to be as <strong>legible</strong> as possible to ensure users of any age could clearly understand what was on screen.</div>
            <br />
          </div>
        </div>

        <div className="body-item">
          <div className="section-title">
            <div>The Takeaways</div>
            <div className="underline"></div>
          </div>
          <div className="section-body">
            <div className="section-content">This project <strong>tested my ability to adapt quickly to change</strong>, due to the timeline functionalities of the app had to be dropped or altered due to either time constraints or the ability to accurately develop said element.</div>
            <br/>
            <div className="section-content">For example we had the database designed to track achievements by users over multiple games on a user profile page. Our team decided to forgo this feature as it wouldn't be required to present the project's MVP; in cases like this the project also taught me the <strong>importance of scalability in design</strong>, and <strong>understanding when to say enough is enough</strong>.</div>
            <br/>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}