import { Button } from "@material-ui/core";

import "../styles/hobbies.sass";
import useStyles from "../hooks/useStyles";

const Contact = (props) => {

  const classes = useStyles();

  return (
    <div className="text-container">
      <h3>Looking to get in Touch?</h3>
      <div className="paragraph" ></div>
      <div className="btn-container">
        <Button href="mailto:williamzak0@gmail.com" className={classes.root}>Email Me</Button>
        <Button href="https://www.linkedin.com/in/williamzak/" className={classes.root}>Connect on LinkedIn</Button>
      </div>
    </div>
  )
}

export default Contact;