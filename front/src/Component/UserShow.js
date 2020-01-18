import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      posts: [],
      isAuthenticate: false
    };
  }
  
  componentDidMount() {
    const { match: { params } } = this.props;
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
    axios
      .get(`http://localhost:3001/api/v1/users/${params.id}`, headers)
      .then(response => {
        this.setState({
          user: response.data.user,
          posts: response.data.posts,
          isAuthenticate: response.data.isAuthenticate
        });
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
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}


class PostListItem extends Component {
  markup() {
    const html = this.props.post.content
    return { __html: html}
  }
  render() {
      return (
        <div>
            <h4>{this.props.post.title}</h4>
            <div dangerouslySetInnerHTML={this.markup()}></div>
            <p>{this.props.post.created_at}</p>
            <Link to={`/api/v1/posts/${this.props.post.id}`}>Show</Link>
        </div>
    );
  }
}
