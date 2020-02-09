import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'
import { Card, CardTitle, CardTime, CardLinkCenter, Button} from "../StyledComponent/Card";
import { PageTitle, PageColor } from "../StyledComponent/Page";

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
      <PageColor>
        <PageTitle>ユーザー</PageTitle>
        <UserList users={this.state.users} />
      </PageColor>
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
        <CardLinkCenter>
          <Link to={`/api/v1/users/${this.props.user.id}`}>
            <Button color={'#8aaee6'} hover={'#5c91e6'}>詳細を見る</Button>
          </Link>
        </CardLinkCenter>
      </Card>
    );
  }
}

