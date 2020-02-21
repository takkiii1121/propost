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
            .post('http://localhost:3001/api/users', data)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    token: response.data.token,
                    isAuthenticate: response.data.isAuthenticate
                })
                if (this.state.isAuthenticate) {
                    lscache.set('token', this.state.token, 1440)
                    this.props.history.push({pathname: '/', state: {message: "登録しました", level: "success"}})
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
            <FormPage>
                <NotificationSystem ref={this.notificationSystem} />
                <form onSubmit={this.handleSubmit}>
                    <Field className="field">
                        <Label htmlFor="user_name">お名前</Label>
                        <Input type="text" name="name" />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_email">Eメール</Label>
                        <Input type="email" name="email" />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_password">パスワード</Label>
                        <Input type="password" name="password" />
                    </Field>
                    <Field className="field">
                        <Label htmlFor="user_password_confirmation" >パスワード(確認)</Label>
                        <Input type="password" name="password_confirmation" />
                    </Field>
                    <Button>送信</Button>
                </form>
            </FormPage>
        )
    }
}
export default withRouter(UserSignUp)
