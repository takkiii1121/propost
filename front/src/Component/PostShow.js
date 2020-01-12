import React, { Component } from "react";
import axios from "axios";

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, user: {} };
  }
 
  componentDidMount() {
    const { match: { params } } = this.props;

    axios
      .get(`http://localhost:3001/api/v1/posts/${params.id}`)
      .then(response => {
        this.setState({ post: response.data.post, user: response.data.user });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.created_at}</p>
        <p>{this.state.user.name}</p>
        <p>{this.state.post.content}</p>
      </div>
    );
  }
}
