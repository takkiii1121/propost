import React, {Component} from 'react'
import lscache from 'lscache'
import axios from 'axios'
import PersonIcon from '@material-ui/icons/Person';
import {SideLink, SideContainer, UserIcon, Circle} from '../StyledComponent/SideNavbar'

export default class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: {},
            token: lscache.get('token')
        }
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`http://localhost:3001/api/v1/me`, headers)
        .then(response => {
            this.setState({
            currentUser: response.data
            });
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    render() {
        if (this.state.currentUser != null) {
            return(
                <SideContainer>
                    <SideLink to={'/api/v1/posts'}>新着記事</SideLink>
                    <SideLink to={'/api/v1/users'}>ユーザー一覧</SideLink>
                    <Circle>
                        <UserIcon>
                            <PersonIcon fontSize={'large'} />
                        </UserIcon>
                    </Circle>
                    <SideLink to={`/api/v1/users/${this.state.currentUser.id}`}>ようこそ、{this.state.currentUser.name}さん</SideLink>
                </SideContainer>
            )
        } else {
            return(
                <SideContainer>
                    <SideLink to={'/api/v1/posts'}>新着記事</SideLink>
                    <SideLink to={'/api/v1/users'}>ユーザー一覧</SideLink>
                </SideContainer>
            )
        }
    }
}