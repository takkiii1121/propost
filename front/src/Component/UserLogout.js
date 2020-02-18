import React, {Component} from 'react'
import lscache from 'lscache'
import axios from "axios";
import {NavButton} from '../StyledComponent/AppBar'
import { withRouter } from 'react-router';

class Logout extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
        const data = {id: this.props.id}

        axios
            .post('http://localhost:3001/api/logout', data)
            .then((response) => {
                console.log(response.data)
                if (response.data.logout) {
                    lscache.remove('token')
                    this.props.history.push({pathname: '/', state: {message: "ログアウトしました", level: "success"}})
                    window.location.reload()
                } else {
                    console.log('not logged out yet')
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <NavButton onClick={this.handleClick}>ログアウト</NavButton>
        )
    }
}
export default withRouter(Logout)