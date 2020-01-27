import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system';
import {Input, Field, Label, FormPage, Button} from '../StyledComponent/Form'

class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            token: "",
            isAuthenticate: null,
            active: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.notificationSystem = React.createRef()
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data)
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

    moveForm() {
        this.setState({
            active: true
        })
    }

    render() {
        return(
            <FormPage>
                <NotificationSystem ref={this.notificationSystem} />
                <form onSubmit={this.handleSubmit}>
                    <Field className="field" >
                        <Label htmlFor="user_email" className="lavel" active={this.state.active}>Email</Label>
                        <Input type="email" name="email" onClick={() => this.moveForm()} active={this.state.active}/>
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_password" active={this.state.active}>Password</Label>
                        <Input type="password" name="password" onClick={() => this.moveForm()} active={this.state.active}/>
                    </Field>
                    <Button>Send</Button>
                </form>
            </FormPage>
        )
    }
}
export default withRouter(UserLogin)

