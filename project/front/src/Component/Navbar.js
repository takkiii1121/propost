import React, {Component} from 'react'
import lscache from 'lscache'
import axios from "axios";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Logout from './UserLogout'
import {withStyles} from '@material-ui/styles';
import {commonStyle, NavLink, RightBar, NavButton} from '../StyledComponent/AppBar'
import { withRouter } from 'react-router';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: {},
            token: lscache.get('token')
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/me`, headers)
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
        const path = event.currentTarget.getAttribute('data-path')
        this.props.history.push({pathname: path})
        window.location.reload()
    }
    
    render() {
        if (this.state.currentUser != null) {
            return(
                <AppBar position="relative" classes={{colorPrimary: this.props.classes.appBarColorDefault}}>
                    <Toolbar>
                        <NavLink to={'/'}><NavButton>ProPost</NavButton></NavLink>
                        <RightBar>
                            <NavLink to={'/new'} ><NavButton content={'投稿する'}><CreateIcon /></NavButton></NavLink>
                            <NavLink to={`/users/${this.state.currentUser.id}`}><NavButton content={'マイページ'}><AccountCircleIcon /></NavButton></NavLink>
                            <Logout id={this.state.currentUser.id} />
                        </RightBar>
                    </Toolbar>
                </AppBar>
            )
        } else {
            return(
                <AppBar position="relative" classes={{colorPrimary: this.props.classes.appBarColorDefault}}>
                    <Toolbar>
                        <NavButton onClick={this.handleClick} data-path="/">ProPost</NavButton>
                        <RightBar>
                            <NavButton onClick={this.handleClick} data-path="/signup">サインアップ</NavButton>
                            <NavButton onClick={this.handleClick} data-path="/login">サインイン</NavButton>
                        </RightBar>
                    </Toolbar>
                </AppBar>
            )
        }
    }
}

export default withStyles(commonStyle)(withRouter(Navbar))
