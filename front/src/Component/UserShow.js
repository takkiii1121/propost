import React, { Component } from "react";
import axios from "axios";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  // componentDidMount() {
  //   this.userFind(this.params.id);
  // }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.userFind(nextProps.params.id);
  // }
  // userFind(userId) {
  //   axios
  //     .get("http://localhost:3001/api/v1/users/${this.props.params.id}")
  //     .then(response => {
  //       this.setState({ user: response.data });
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/users/${props.match.params.id}`)
      .then(response => {
        this.setState({ user: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <div>
        <h2>Show</h2>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.created_at}</p>
      </div>
    );
  }
}
