import React, { Component } from "react";
import axios from "axios";
import lscache from 'lscache'
import { PageTitle, PageText, PageColor, PostBody, PageLink } from "../StyledComponent/Page";
import LikeUsers from './LikeUsers'
import LikeButton from "./LikeButton";
import styled from 'styled-components'

const Accordion = styled.button`
  color: #6088c6;
  border: none;
  margin: 20px;
  border-bottom: solid;
  width: ${props => props.toggle ? '82%' : '200px'};
  font-size: 15px;
  text-align: left;
  transition: all 200ms;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
`

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      user: {},
      liked: '',
      token: lscache.get('token'),
      id: this.props.match.params.id,
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this)
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
          liked: response.data.liked
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

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    console.log(this.state.liked)
    const liked = this.state.liked
    if (liked !== '') {
      return (
        <PageColor>
          <PageTitle>{this.state.post.title}</PageTitle>
          <PageText>{this.state.post.created_at}に投稿しました</PageText>
          <PageLink to={`/api/v1/users/${this.state.user.id}`}>著者：{this.state.user.name}</PageLink>
          <PostBody dangerouslySetInnerHTML={this.markup()}></PostBody>
          <LikeButton id={this.state.id} liked={liked}/>
          <Accordion toggle={this.state.toggle} onClick={this.handleClick}>いいねしたユーザーを見る</Accordion>
          <LikeUsers toggle={this.state.toggle} id={this.state.id} authenticate={true} />
        </PageColor>
      );
    } else {
      return (
        <PageColor>
          <PageTitle>{this.state.post.title}</PageTitle>
          <PageText>{this.state.post.created_at}に投稿しました</PageText>
          <PageLink to={`/api/v1/users/${this.state.user.id}`}>著者：{this.state.user.name}</PageLink>
          <PostBody dangerouslySetInnerHTML={this.markup()}></PostBody>
          <LikeUsers id={this.state.id} authenticate={false} />
        </PageColor>
      );
    }
    
  }
}
