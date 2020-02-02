import React, {Component} from 'react'
import axios from 'axios'

export default class LikeUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeUsers: [],
            count: ''
        }
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`http://localhost:3001/api/v1/posts/${this.props.id}/liked`, headers)
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
        if (this.props.toggle) {
            return(
                <div>
                    <p>この記事にいいねしたユーザー</p>
                    <LikeUserList users={this.state.likeUsers}></LikeUserList>
                </div>
            )
        } else {
            return(<div></div>)
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
            <p>{this.props.user.name}</p>
        )
    }
}