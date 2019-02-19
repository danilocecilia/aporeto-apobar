import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "../containers/navbar/NavBar";
import Home from "../containers/home/Home";
import Warehouse from "../containers/warehouse/Warehouse";
import Market from "../containers/market/Market";

const routes = (
  <div>
    <NavBar />
    <Switch>
      <div className="container" style={{ marginTop: "40px" }}>
        <Route exact path="/" component={Home} />
        <Route path="/warehouse" component={Warehouse} />
        <Route path="/market/:type" component={Market} />
      </div>
    </Switch>
  </div>
);

export default routes;
