import React, { Component } from "react";
import axios from "axios";
import lscache from 'lscache'
import { PageTitle, PageText, PageColor, PostBody, PageLink } from "../StyledComponent/Page";

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
      <PageColor>
        <PageTitle>{this.state.post.title}</PageTitle>
        <PageText>{this.state.post.created_at}に投稿しました</PageText>
        <PageLink to={`/api/v1/users/${this.state.user.id}`}>著者：{this.state.user.name}</PageLink>
        <PostBody dangerouslySetInnerHTML={this.markup()}></PostBody>
      </PageColor>
    );
  }
}
