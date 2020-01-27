import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'
import { Card, CardLink, CardTitle, CardTime } from "../StyledComponent/Card";
import { PageTitle } from "../StyledComponent/PageTitle";

export default class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAuthenticate: false,
      token: lscache.get('token')
    };
  }
  componentDidMount() {
    this.userAll()
  }
  UNSAFE_componentWillReceiveProps() {
    this.userAll()
  }
  userAll() {
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
    axios
      .get("http://localhost:3001/api/v1/users", headers)
      .then(response => {
        console.log(response.data);
        this.setState({
          users: response.data.users,
          isAuthenticate: response.data.isAuthenticate
        });
      })
      .catch(error => {
        console.log(error.response);
        console.log("error!");
      });
  }
  render() {
    return (
      <div>
        <PageTitle>ユーザー一覧</PageTitle>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

class UserListItem extends Component {
  render() {
    return (
      <Card>
        <CardTitle>{this.props.user.name}</CardTitle>
        <CardTime>{this.props.user.created_at}に登録しました</CardTime>
        <CardLink>
          <Link to={`/api/v1/users/${this.props.user.id}`}>Show</Link>
        </CardLink>
      </Card>
    );
  }
}

