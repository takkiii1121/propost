import React, {Component} from 'react'
import lscache from 'lscache'
import axios from 'axios'
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import {SideLink, SideContainer, UserIcon, Circle, HamburgerButton} from '../StyledComponent/SideNavbar'

export default class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: {},
            token: lscache.get('token'),
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`http://localhost:3001/api/me`, headers)
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

    handleClick(event) {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const NowPath = window.location.pathname
        console.log(NowPath)
        if ((NowPath == '/login') || (NowPath == '/signup')) {
            return(
                <SideContainer />
            )
        } else if (this.state.currentUser != null) {
            return(
                <div>
                    <HamburgerButton onClick={this.handleClick} isOpen={this.state.isOpen} ><MenuIcon /></HamburgerButton>
                    <SideContainer isOpen={this.state.isOpen}>
                        <SideLink to={'/'}>新着記事</SideLink>
                        <SideLink to={'/users'}>ユーザー一覧</SideLink>
                        <Circle>
                            <UserIcon>
                                <PersonIcon fontSize={'large'} />
                            </UserIcon>
                        </Circle>
                        <SideLink to={`/users/${this.state.currentUser.id}`}>ようこそ<br></br>{this.state.currentUser.name}さん</SideLink>
                    </SideContainer>
                </div>
            )
        } else {
            return(
                <div>
                    <HamburgerButton onClick={this.handleClick} isOpen={this.state.isOpen}><MenuIcon /></HamburgerButton>
                    <SideContainer isOpen={this.state.isOpen}>
                        <SideLink to={'/'}>新着記事</SideLink>
                        <SideLink to={'/users'}>ユーザー一覧</SideLink>
                    </SideContainer>
                </div>
            )
        }
    }
}