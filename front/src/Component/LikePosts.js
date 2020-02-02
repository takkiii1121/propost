import React, { Component } from "react";
import axios from "axios";
import lscache from 'lscache'

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
            <div>
                <p>{this.props.user.name}さんがいいねした記事</p>
                <p>{this.state.count}件</p>
                <LikePostList posts={this.state.likePosts} />
            </div>
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
    render() {
        return(
            <p>{this.props.post.title}</p>
        )
    }
}