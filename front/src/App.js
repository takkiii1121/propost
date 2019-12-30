import React, { Component } from "react";
import UserIndex from "./Component/UserIndex";
import UserShow from "./Component/UserShow";
import UserSignUp from "./Component/UserSignUp";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/api/v1/users" component={UserIndex} />
        <Route exact path="/api/v1/users/:id" component={UserShow} />
        <Route exact path="/api/v1/signup" component={UserSignUp} />
      </Switch>
    );
  }
}

export default App;
