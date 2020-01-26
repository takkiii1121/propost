import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system'

export default class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      token: lscache.get('token'),
      isAuthenticate: false
    };
    this.notificationSystem = React.createRef()
  }
  componentDidMount() {
    this.postAll()
  }
  UNSAFE_componentWillReceiveProps() {
    this.postAll()
  }
  postAll() {
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
    const notification = this.notificationSystem.current

    axios
      .get("http://localhost:3001/api/v1/posts", headers)
      .then(response => {
        console.log(response.data);
        this.setState({
          posts: response.data.posts,
          isAuthenticate: response.data.isAuthenticate
        });
      })
      .catch(error => {
        console.log(error.response);
      });
      if (this.props.location.state != undefined) {
        const message = this.props.location.state.message
        const level = this.props.location.state.level
        console.log(message)
        console.log(level)
        notification.addNotification({
          message: message,
          level: level
        })
      }
  }
  render() {
      return (
        <div>
          <NotificationSystem ref={this.notificationSystem} />
          <h2>Posts</h2>
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
