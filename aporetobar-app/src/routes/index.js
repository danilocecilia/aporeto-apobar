import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "../containers/navbar/NavBar";
import Home from "../containers/home/Home";
import Warehouse from "../containers/warehouse/Warehouse";
const routes = (
  <div>
    <NavBar />
    <Switch>
      <div className="container" style={{ "margin-top": "40px" }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/warehouse" component={Warehouse} />
      </div>
    </Switch>
  </div>
);

export default routes;
