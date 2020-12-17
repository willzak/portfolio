import React from "react";
import { Link } from "react-scroll";
import Typical from 'react-typical';
import { Button } from '@material-ui/core';

import "../styles/landing.sass";
import 'fontsource-roboto';

export default function Landing(props) {

  return (
    <div class="screen">
      <div class="welcome-text">
        <Typical 
          steps={[
            'Hey!', 3000,
            'Welcome!', 3000,
            'Bonjour!', 3000,
            'Bienvenue!', 3000,
            'Hej!', 3000,
            'Välkommen!', 3000,
            '안녕하세요!', 3000,
            '어서 오십시오!', 3000
          ]}
          loop={Infinity}
          wrapper="p"
        />
        <div class="link-container">
          <Link
            activeClass="active"
            to="aboutme"
            spy={false}
            smooth={true}
            offset={-100}
            duration={500}
          ><Button>About Me</Button></Link>
          <Link
            activeClass="active"
            to="projects"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
          ><Button>Projects</Button></Link>
        </div>
      </div>
    </div>
  )
}
