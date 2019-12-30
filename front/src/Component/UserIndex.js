import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }
  componentDidMount() {
    this.userAll()
  }
  UNSAFE_componentWillReceiveProps() {
    this.userAll()
  }
  userAll() {
    axios
      .get("http://localhost:3001/api/v1/users")
      .then(response => {
        console.log(response.data);
        this.setState({
          loading: true,
          users: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
        console.log("error!");
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Users</h2>
          <UserList users={this.state.users} />
          <br/>
          <Link to="/api/v1/signup">Signup</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Users</h2>
          <p>Loading...</p>
        </div>
      );
    }
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
// UserList.propsTypes = {
//   users: PropTypes.array.isRequired
// };

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
// UserListItem.propTypes = {
//   user: PropTypes.object.isRequired
// };
