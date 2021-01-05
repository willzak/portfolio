import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import useStyles from "../hooks/useStyles";

import "../styles/projects.sass";

export default function ProjectItem(props) {

  const classes = useStyles();

  return (
    <Fade>
      <div className="proj-container">
        <div className="proj-item">
          <h3>{props.title}</h3>
          <div className="proj-info">
            <div>{props.desc}</div>
            <h4>About the Project:</h4>
            <ul>
              <li><strong>Timeframe:</strong> {props.timeframe}</li>
              <li><strong>Role:</strong> {props.role}</li>
              <li><strong>Stack:</strong> {props.stack}</li>
            </ul>
          </div>
          <div className="btn-container">
            { props.github && <Button href={props.github} className={classes.root} target="_blank">View on Github</Button> }
            { props.design && <Link to={props.design} className="linker" style={{"text-decoration": "none"}}><Button href={props.design} className={classes.root} target="_blank">View UX</Button></Link> }
          </div>
        </div>
        <div className="img-container">
          <img src={window.location.origin + props.img} alt={props.alt} className="proj-img" />
        </div>
      </div>
    </Fade>
  )
}