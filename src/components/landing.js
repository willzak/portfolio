import React from "react";
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
          <Button href="#aboutme">About Me</Button>
          <Button href="#projects">Projects</Button>
        </div>
      </div>
    </div>
  )
}
