import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostDestroy from "./PostDestroy";
import NotificationSystem from 'react-notification-system'
import { Card, CardTitle, CardBody, CardTime, CardLinkCenter, Button } from "../StyledComponent/Card";
import { PageTitle, PageColor, PageText} from "../StyledComponent/Page";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.notificationSystem = React.createRef()
  }
  
  componentDidMount() {
    const notification = this.notificationSystem.current
    if (this.props.state != undefined) {
      const message = this.props.state.message
      const level = this.props.state.level
      notification.addNotification({
        message: message,
        level: level
      })
    }
  }

  render() {
    return (
      <PageColor>
        <NotificationSystem ref={this.notificationSystem} />
        <PageTitle>{this.props.user.name}さんの投稿</PageTitle>
        <PageText>{this.props.posts.length}件</PageText>
        <PostList posts={this.props.posts} mypage={this.props.mypage} id={this.props.user.id} />
      </PageColor>
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
        <Card>
            <CardTitle>{this.props.post.title}</CardTitle>
            <CardBody dangerouslySetInnerHTML={this.markup()}></CardBody>
            <CardTime>{this.props.post.created_at.replace('-', '/').split('T')[0].replace('-', '/')}に投稿しました</CardTime>
            <CardLinkCenter>
              <Link to={`/posts/${this.props.post.id}`}>
                <Button color={'#8aaee6'} hover={'#5c91e6'}>続きを見る</Button>
              </Link>
              <PostDestroy id={this.props.post.id} />
            </CardLinkCenter>
        </Card>
      );
    } else {
      return (
        <Card>
            <CardTitle>{this.props.post.title}</CardTitle>
            <CardBody dangerouslySetInnerHTML={this.markup()}></CardBody>
            <CardTime>{this.props.post.created_at.replace('-', '/').split('T')[0].replace('-', '/')}に投稿しました</CardTime>
            <CardLinkCenter>
              <Link to={`/posts/${this.props.post.id}`}>
                <Button color={'#8aaee6'} hover={'#5c91e6'}>続きを見る</Button>
              </Link>
            </CardLinkCenter>
        </Card>
      );
    }   
  }
}
