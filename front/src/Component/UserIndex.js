import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'

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
        <h2>Users</h2>
        <UserList users={this.state.users} />
        <br/>
        <Link to="/api/v1/signup">Signup</Link>
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
      <p>
        {this.props.user.name}
        <Link to={`/api/v1/users/${this.props.user.id}`}>Show</Link>
      </p>
    );
  }
}

