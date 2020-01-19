import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import lscache from 'lscache'

class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            token: "",
            isAuthenticate: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)

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
                    this.props.history.push('/api/v1/posts')
                    window.location.reload()
                } else {
                    console.log('not logined yet')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <div>
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
                <ResetToLscache isAuthenticate={this.state.isAuthenticate} />
            </div>
        )
    }
}
export default withRouter(UserLogin)

class ResetToLscache extends Component {
    render() {
        if (this.props.isAuthenticate) {
            return(
                <p>ログインに成功しました</p>
            )
        } else if (this.props.isAuthenticate == false) {
            return(
                <p>入力した情報が間違っています</p>
            )
        } else {
            return(
                <p></p>
            )
        }
    }
}