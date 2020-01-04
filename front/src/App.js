import React, { Component } from "react";
import UserIndex from "./Component/UserIndex";
import UserShow from "./Component/UserShow";
import UserSignUp from "./Component/UserSignUp";
import UserLogin from "./Component/UserLogin";
import PostIndex from "./Component/PostIndex";
import PostShow from "./Component/PostShow";
import PostNew from "./Component/PostNew";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/api/v1/users" component={UserIndex} />
        <Route exact path="/api/v1/users/:id" component={UserShow} />
        <Route exact path="/api/v1/signup" component={UserSignUp} />
        <Route exact path="/api/v1/login" component={UserLogin} />
        <Route exact path="/api/v1/posts" component={PostIndex} />
        <Route exact path="/api/v1/posts/:id" component={PostShow} />
        <Route exact path="/api/v1/new" component={PostNew} />
      </Switch>
    );
  }
}

export default App;
