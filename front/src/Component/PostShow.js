import React, { Component } from "react";
import axios from "axios";
import lscache from 'lscache'

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      user: {},
      isAuthenticate: false,
      token: lscache.get('token')
    };
  }
 
  componentDidMount() {
    const { match: { params } } = this.props;
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}

    axios
      .get(`http://localhost:3001/api/v1/posts/${params.id}`, headers)
      .then(response => {
        this.setState({
          post: response.data.post,
          user: response.data.user,
          isAuthenticate:response.data.isAuthenticate
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  markup() {
    const html = this.state.post.content
    return { __html: html}
  }

  render() {
    return (
      <div>
        <h2>title: {this.state.post.title}</h2>
        <p>{this.state.post.created_at}</p>
        <p>user: {this.state.user.name}</p>
        <div dangerouslySetInnerHTML={this.markup()}></div>
      </div>
    );
  }
}
