import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system'
import {Card, CardTitle, CardBody, CardTime, CardLink} from '../StyledComponent/Card.js'
import {PageTitle} from '../StyledComponent/PageTitle'

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
          <PageTitle>記事一覧</PageTitle>
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
        <Card>
            <CardTitle>{this.props.post.title}</CardTitle>
            <CardBody dangerouslySetInnerHTML={this.markup()}></CardBody>
            <CardTime>{this.props.post.created_at}に投稿しました</CardTime>
            <CardLink>
              <Link to={`/api/v1/posts/${this.props.post.id}`}>Show</Link>
            </CardLink>
        </Card>
    );
  }
}
