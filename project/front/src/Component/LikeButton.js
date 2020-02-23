import React, {Component} from 'react'
import axios from 'axios'
import lscache from 'lscache'
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components'

const LikeButtonStyle = styled.div`
    color: ${props => props.color};
    text-decoration: none;
    margin: 1%;
    text-align: center;
    position: fixed;
    z-index: 1;
    border: solid;
    border-color: ${props => props.color};
    border-radius: 50%;
    transition-duration: 300ms;
    &:hover {
        background: ${props => props.color};
        color: #fff;
    }
    @media (min-width: 768px) {
        padding: 20px 20px 15px 20px;
        top: 55%;
        right: 2%;
    }
    @media (max-width: 767px) {
        padding: 10px 10px 5px 10px;
        top: 14%;
        right: 15%;
        transform: scale(0.8);
    }
`


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
        .post(`${process.env.REACT_APP_SERVER_URL}/api/unlike`, data, headers)
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
        .post(`${process.env.REACT_APP_SERVER_URL}/api/like`, data, headers)
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
                <LikeButtonStyle color={'#eb8686'} onClick={this.handleClick1}><FavoriteIcon fontSize='large' /></LikeButtonStyle>
            )
        } else {
            return(
                <LikeButtonStyle color={'#ccc'} onClick={this.handleClick2}><FavoriteIcon fontSize='large' /></LikeButtonStyle>
            )
        }
        
    }
}