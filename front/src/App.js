import React, { Component } from "react";
import UserIndex from "./Component/UserIndex";
import UserShow from "./Component/UserShow";
import UserSignUp from "./Component/UserSignUp";
import UserLogin from "./Component/UserLogin";
import PostIndex from "./Component/PostIndex";
import PostShow from "./Component/PostShow";
import PostNew from "./Component/PostNew";
import PrivateRoute from "./Component/PrivateRoute"
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'

const Body = styled.div`
    width: 80%;
    float: right;
`

export default class App extends Component {
  render() {
    return (
      <Body>
      <Switch>
        <Route exact path="/api/v1/users" component={UserIndex} />
        <Route exact path="/api/v1/users/:id" component={UserShow} />
        <Route exact path="/api/v1/signup" component={UserSignUp} />
        <Route exact path="/api/v1/login" component={UserLogin} />
        <Route exact path="/api/v1/posts" component={PostIndex} />
        <Route exact path="/api/v1/posts/:id" component={PostShow} />
        <PrivateRoute exact path="/api/v1/new" component={PostNew} />
      </Switch>
      </Body>
    );
  }
}


