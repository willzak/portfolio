import React from "react";
import { Link } from "react-scroll";
import { Link as BrowserLink } from "react-router-dom";


import "../styles/nav.sass";

export default function Nav(props) {
  if (props.home) {
    return (
      <div className="nav-bar">
        <div className="nav-left">
          <Link
            className="item-left"
            activeClass="active"
            to="top"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
          ><button className="title-btn">Will Zak</button></Link>
        </div>
        <div className="nav-right">
          <Link
            className="item-right"
            activeClass="active"
            to="top"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
          ><button className="btn">Home</button></Link>
          <Link
            className="item-right"
            activeClass="active"
            to="aboutme"
            spy={false}
            smooth={true}
            offset={-100}
            duration={500}
          ><button className="btn">About</button></Link>
          <Link
            className="item-right"
            activeClass="active"
            to="projects"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
          ><button className="btn">Projects</button></Link>
  
        </div>
      </div>
    )
  }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <Link
          className="item-left"
          activeClass="active"
          to="top"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
        ><button className="title-btn">Will Zak</button></Link>
      </div>
      <div className="nav-right">
        <BrowserLink to="/">
          <button className="btn">Home</button>
        </BrowserLink>
      </div>
    </div>
  )
}