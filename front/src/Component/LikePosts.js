import React, { Component } from "react";
import axios from "axios";
import lscache from 'lscache'
import { Link } from "react-router-dom";
import { PageText, PageTitle, PageColor } from "../StyledComponent/Page";
import {Card, CardTitle, CardBody, CardTime, CardLinkCenter, Button} from '../StyledComponent/Card.js'

export default class LikePosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            likePosts: [],
            count: '',
            token: lscache.get('token')
        }
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`http://localhost:3001/api/v1/users/${this.props.id}/like`, headers)
        .then(response => {
            console.log(response.data);
            this.setState({
            users: response.data.users,
            likePosts: response.data.like_posts,
            count: response.data.count
            });
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    render() {
        return(
            <PageColor>
                <PageTitle>{this.props.user.name}さんがいいねした記事</PageTitle>
                <PageText>{this.state.count}件</PageText>
                <LikePostList posts={this.state.likePosts} />
            </PageColor>
        )
    }
}

class LikePostList extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(post => (
                    <LikePostListItem key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

class LikePostListItem extends Component {
    markup() {
        const html = this.props.post.content
        return { __html: html}
    }
    render() {
        return(
            <Card>
                <CardTitle>{this.props.post.title}</CardTitle>
                <CardBody dangerouslySetInnerHTML={this.markup()}></CardBody>
                <CardTime>{this.props.post.created_at}に投稿しました</CardTime>
                <CardLinkCenter>
                <Link to={`/api/v1/posts/${this.props.post.id}`}>
                    <Button color={'#aec4e5'} hover={'#bbd1f2'}>続きを見る</Button>
                </Link>
                </CardLinkCenter>
            </Card>
        )
    }
}