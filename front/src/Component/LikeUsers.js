import React, {Component} from 'react'
import axios from 'axios'
import { PageText, PageLink } from '../StyledComponent/Page'
import styled from 'styled-components'

const FadeIn = styled.div`
    opacity: ${props => props.toggle ? '1' : '0'};
    transition: all 200ms;
`

const NumOfLike = styled.div`
    color: #2f394d;
    margin: 1%;
    text-align: center;
    position: fixed;
    right: 2%;
    @media (min-width: 768px) {
        font-size: 20px;
        top: 35%;
    }
    @media (max-width: 767px) {
        font-size: 10px;
        top: 12%;
    }
`

const Bold = styled.div`
    font-size: 30px;
    font-weight: bold;
`

export default class LikeUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeUsers: [],
            count: 0
        }
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`http://localhost:3001/api/posts/${this.props.id}/liked`, headers)
        .then(response => {
            console.log(response.data);
            this.setState({
            likeUsers: response.data.like_users,
            count: response.data.count
            });
        })
        .catch(error => {
            console.log(error.response);
        });
    }
    
    render() {
        if (this.props.authenticate) {
            return(
                <div>
                    <NumOfLike><Bold>{this.state.count}</Bold>いいね！</NumOfLike>
                    <FadeIn toggle={this.props.toggle}>
                        <PageText>この記事にいいねしたユーザー：{this.state.count}人</PageText>
                        <LikeUserList users={this.state.likeUsers}></LikeUserList>
                    </FadeIn>
                </div>
            )
        } else {
            return(
                <NumOfLike><Bold>{this.state.count}</Bold>いいね！</NumOfLike>
            )
        }
            
    }
}

class LikeUserList extends Component {
    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <LikeUserListItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

class LikeUserListItem extends Component {
    render() {
        return(
            <PageLink to={`/users/${this.props.user.id}`}>{this.props.user.name}</PageLink>
        )
    }
}