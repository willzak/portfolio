import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import useStyles from "../hooks/useStyles";

import "../styles/projects.sass";

export default function ProjectItem(props) {

  const classes = useStyles();

  return (
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
        { props.github && <Button href={props.github} className={classes.root}>View on Github</Button>}
      </div>
      <div className="img-container">
        <img src={window.location.origin + props.img} alt={props.alt} className="proj-img" />
      </div>
    </div>
  )
}