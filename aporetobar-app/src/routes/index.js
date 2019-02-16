import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "../containers/navbar/NavBar";
import Home from "../containers/home/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
const routes = (
  <div>
    <CssBaseline />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default routes;
