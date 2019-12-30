import React, {Component} from 'react';
import axios from 'axios';

export default class UserSignUp extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)

        axios
            .post('http://localhost:3001/api/v1/users', data)
            .then((response) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="user_name">Name</label><br/>
                    <input type="text" id="user_name" name="name" />
                </div>
                <div className="field">
                    <label htmlFor="user_email">Email</label><br/>
                    <input type="email" id="user_email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="user_password">Password</label><br/>
                    <input type="password" id="user_password" name="password" />
                </div>
                <div className="field">
                    <label htmlFor="user_password_confirmation">Password Confirmation</label><br/>
                    <input type="password" id="user_password_confirmation" name="password_confirmation" />
                </div>
                {/* <div className="action">
                    <button onClick={this.submit.bind(this)}>{this.props.buttonLable}</button>
                </div> */}
                <button>Send</button>
            </form>
        )
    }
}

