import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../header/header";
import "./App.css";
import Home from "../home/home";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        {/* <Header /> */}
        <Home />
      </div>
    );
  }
}

export default withRouter(App);
