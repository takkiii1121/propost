import React, {Component} from 'react'
import lscache from 'lscache'
import axios from "axios";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Logout from './UserLogout'
import {withStyles} from '@material-ui/styles';
import {commonStyle, NavLink, RightBar, NavButton} from '../StyledComponent/AppBar'


class Navbar extends Component {
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
    
    render() {
        if (this.state.currentUser != null) {
            return(
                <AppBar position="relative" classes={{colorPrimary: this.props.classes.appBarColorDefault}}>
                    <Toolbar>
                        <NavLink to={'/'}><NavButton>ProPost</NavButton></NavLink>
                        <RightBar>
                            <NavLink to={'/new'}><NavButton>投稿する</NavButton></NavLink>
                            <NavLink to={`/users/${this.state.currentUser.id}`}><NavButton>マイページ</NavButton></NavLink>
                            <Logout id={this.state.currentUser.id} />
                        </RightBar>
                    </Toolbar>
                </AppBar>
            )
        } else {
            return(
                <AppBar position="relative" classes={{colorPrimary: this.props.classes.appBarColorDefault}}>
                    <Toolbar>
                        <NavLink to={'/'}><NavButton>ProPost</NavButton></NavLink>
                        <RightBar>
                            <NavLink to={'/signup'}><NavButton>サインアップ</NavButton></NavLink>
                            <NavLink to={'/login'}><NavButton>サインイン</NavButton></NavLink>
                        </RightBar>
                    </Toolbar>
                </AppBar>
            )
        }
    }
}

export default withStyles(commonStyle)(Navbar)
