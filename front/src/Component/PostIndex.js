import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'

export default class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
      token: lscache.get('token'),
      isAuthenticate: false
    };
  }
  componentDidMount() {
    this.postAll()
  }
  UNSAFE_componentWillReceiveProps() {
    this.postAll()
  }
  postAll() {
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
    axios
      .get("http://localhost:3001/api/v1/posts", headers)
      .then(response => {
        console.log(response.data);
        this.setState({
          loading: true,
          posts: response.data.posts,
          isAuthenticate: response.data.isAuthenticate
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
          <h2>Posts</h2>
          <PostList posts={this.state.posts} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Posts</h2>
          <p>Loading...</p>
        </div>
      );
    }
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
            <p>{this.props.post.user_id}</p>
            <Link to={`/api/v1/posts/${this.props.post.id}`}>Show</Link>
        </div>
    );
  }
}
