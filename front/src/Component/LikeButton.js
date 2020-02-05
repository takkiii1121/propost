import React, {Component} from 'react'
import axios from 'axios'
import lscache from 'lscache'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state={
            like: this.props.liked,
            token: lscache.get('token')
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick1(event) {
        event.preventDefault()
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        const data = {id: this.props.id}
        axios
        .post('http://localhost:3001/api/v1/unlike', data, headers)
        .then(response => {
            console.log(response.data);
            this.setState({
                like: response.data.like
            })
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    handleClick2(event) {
        event.preventDefault()
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        const data = {id: this.props.id}
        axios
        .post('http://localhost:3001/api/v1/like', data, headers)
        .then(response => {
            console.log(response.data);
            this.setState({
                like: response.data.like
            })
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    render() {
        console.log(this.state.like)
        if (this.state.like) {
            return(
                <button onClick={this.handleClick1}>よくない</button>
            )
        } else {
            return(
                <button onClick={this.handleClick2}>いいね</button>
            )
        }
        
    }
}