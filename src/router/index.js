import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

import { Home, FormCreation } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={routes.home} component={Home} />
        <Route path={routes.formcreation} component={FormCreation} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
