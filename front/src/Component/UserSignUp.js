import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system';
import {Input, Field, Label, FormPage, Button} from '../StyledComponent/Form'

class UserSignUp extends Component {
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
        const notification = this.notificationSystem.current

        axios
            .post('http://localhost:3001/api/v1/users', data)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    token: response.data.token,
                    isAuthenticate: response.data.isAuthenticate
                })
                if (this.state.isAuthenticate) {
                    lscache.set('token', this.state.token, 1440)
                    this.props.history.push({pathname: '/api/v1/posts', state: {message: "登録しました", level: "success"}})
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
            <FormPage margin={'30px'}>
                <NotificationSystem ref={this.notificationSystem} />
                <form onSubmit={this.handleSubmit}>
                    <Field className="field">
                        <Label htmlFor="user_name" active={this.state.active}>Name</Label>
                        <Input type="text" name="name" onClick={() => this.moveForm()} active={this.state.active} />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_email" active={this.state.active}>Email</Label>
                        <Input type="email" name="email" onClick={() => this.moveForm()} active={this.state.active} />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_password" active={this.state.active}>Password</Label>
                        <Input type="password" name="password" onClick={() => this.moveForm()} active={this.state.active} />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_password_confirmation" active={this.state.active}>Password Confirmation</Label>
                        <Input type="password" name="password_confirmation" onClick={() => this.moveForm()} active={this.state.active} />
                    </Field>
                    <Button>Send</Button>
                </form>
            </FormPage>
        )
    }
}
export default withRouter(UserSignUp)
