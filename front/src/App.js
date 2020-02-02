import React, { Component } from "react";
import UserIndex from "./Component/UserIndex";
import MyPage from "./Component/MyPage";
import UserSignUp from "./Component/UserSignUp";
import UserLogin from "./Component/UserLogin";
import PostIndex from "./Component/PostIndex";
import PostShow from "./Component/PostShow";
import PostNew from "./Component/PostNew";
import PrivateRoute from "./Component/PrivateRoute"
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import Sidebar from './Component/Sidebar'

const Body = styled.div`
    width: 80%;
    float: right;
`

const Side = styled.div`
    width: 20%;
    float: left;
`

export default class App extends Component {
  render() {
    return (
      <div>
      <Side>
        <Sidebar />
      </Side>
      <Body>
      <Switch>
        <Route exact path="/api/v1/users" component={UserIndex} />
        <Route exact path="/api/v1/users/:id" component={MyPage} />
        <Route exact path="/api/v1/signup" component={UserSignUp} />
        <Route exact path="/api/v1/login" component={UserLogin} />
        <Route exact path="/api/v1/posts" component={PostIndex} />
        <Route exact path="/api/v1/posts/:id" component={PostShow} />
        <PrivateRoute exact path="/api/v1/new" component={PostNew} />
      </Switch>
      </Body>
      </div>
    );
  }
}


