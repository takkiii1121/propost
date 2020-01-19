import React, {Component} from 'react';
import axios from 'axios';
import lscache from 'lscache';
import { withRouter } from 'react-router';

class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: "",
            isAuthenticate: false
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
                lscache.set('token', response.data.token, 1440)
                this.props.history.push('/api/v1/posts')
                window.location.reload()
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
                <UserSetToLocalStorage isAuthenticate={this.state.isAuthenticate} />
            </div>
        )
    }
}
export default withRouter(UserLogin)


class UserSetToLocalStorage extends Component {
    
    render() {
        if (this.props.isAuthenticate) {
            return(
                <p>ログインに成功しました</p>
            )
        } else {
            return(
                <p></p>
            )
        }
    }
}