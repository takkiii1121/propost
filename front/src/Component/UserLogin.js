import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system';

class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            token: "",
            isAuthenticate: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.notificationSystem = React.createRef()
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const notification = this.notificationSystem.current

        axios
            .post('http://localhost:3001/api/v1/login', data)
            .then((response) => {
                console.log(response.data.token)
                this.setState({
                    token: response.data.token,
                    isAuthenticate: response.data.isAuthenticate
                })
                if (this.state.isAuthenticate) {
                    lscache.set('token', this.state.token, 1440)
                    this.props.history.push({pathname: '/api/v1/posts', state: {message: "ログインしました", level: "success"}})
                    window.location.reload()
                } else {
                    console.log('not logined yet')
                    notification.addNotification({
                        message: "入力した内容に誤りがあります",
                        level: "error"
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <div>
                <NotificationSystem ref={this.notificationSystem} />
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="user_email">Email</label><br/>
                        <input type="email" id="user_email" name="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="user_password">Password</label><br/>
                        <input type="password" id="user_password" name="password" />
                    </div>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
export default withRouter(UserLogin)
