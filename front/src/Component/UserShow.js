import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import lscache from "lscache"
import PostDestroy from "./PostDestroy";
import NotificationSystem from 'react-notification-system'

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      posts: [],
      token: lscache.get('token'),
      mypage: false
    };
    this.notificationSystem = React.createRef()
  }
  
  componentDidMount() {
    const { match: { params } } = this.props;
    const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
    const notification = this.notificationSystem.current
    axios
      .get(`http://localhost:3001/api/v1/users/${params.id}`, headers)
      .then(response => {
        this.setState({
          user: response.data.user,
          posts: response.data.posts,
          mypage: response.data.mypage
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    if (this.props.location.state != undefined) {
      const message = this.props.location.state.message
      const level = this.props.location.state.level
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
        <h2>Show</h2>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.created_at}</p>
        <PostList posts={this.state.posts} mypage={this.state.mypage} />
      </div>
    );
  }
}

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <PostListItem key={post.id} post={post} mypage={this.props.mypage} />
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
    if (this.props.mypage) {
      return (
        <div>
            <h4>{this.props.post.title}</h4>
            <div dangerouslySetInnerHTML={this.markup()}></div>
            <p>{this.props.post.created_at}</p>
            <Link to={`/api/v1/posts/${this.props.post.id}`}>Show</Link>
            <PostDestroy id={this.props.post.id} />
        </div>
      );
    } else {
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
}
