import React, { Component } from "react";
import UserIndex from "./Component/UserIndex";
import UserShow from "./Component/UserShow";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/api/v1/users" component={UserIndex} />
        <Route exact path="/api/v1/users/:id" component={UserShow} />
      </Switch>
    );
  }
}

export default App;
