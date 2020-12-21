import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import DesignItem from "./MonopoReadUX"

import "../styles/index.sass";

export default function WebContainer(props) {
  return (
    <div class="background">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/monoporead">
            <DesignItem project={"monoporead"} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
