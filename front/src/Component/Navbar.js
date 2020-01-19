import React, {Component} from 'react'
import lscache from 'lscache'
import { Link } from "react-router-dom";
import axios from "axios";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logout from './UserLogout'

export default class Navbar extends Component {
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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={"title"}>Programmer Post</Typography>
                        <h3>{this.state.currentUser.name}さん</h3>
                        <Button color="inherit" href='/api/v1/new'>New</Button>
                        <Link to={`/api/v1/users/${this.state.currentUser.id}`}>My Page</Link>
                        <Logout id={this.state.currentUser.id} />
                    </Toolbar>
                </AppBar>
            )
        } else {
            return(
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={"title"}>
                        Programmer Post
                        </Typography>
                        <Button color="inherit" href='/api/v1/signup'>Sign Up</Button>
                        <Button color="inherit" href='/api/v1/login'>Login</Button>
                    </Toolbar>
                </AppBar>
            )
        }
    }
}


