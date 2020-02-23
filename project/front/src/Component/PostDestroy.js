import React, {Component} from 'react'
import axios from "axios";
import lscache from 'lscache'
import NotificationSystem from 'react-notification-system'
import { withRouter } from 'react-router'
import {Button} from '../StyledComponent/Card'

class PostDestroy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: lscache.get('token')
        }
        this.handleClick = this.handleClick.bind(this)
        this.notificationSystem = React.createRef()
    }

    handleClick(event) {
        event.preventDefault()
        const data = {id: this.props.id}
        console.log(this.props.id)
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        const notification = this.notificationSystem.current

        axios
            .delete(`${process.env.REACT_APP_SERVER_URL}/api/posts/${this.props.id}`, headers, data)
            .then((response) => {
                console.log(response.data)
                if (response.data.destroy) {
                    this.props.history.push({pathname: `/users/${response.data.current_user.id}`, state: {message: "記事を削除しました", level: "success"}})
                    window.location.reload()
                } else {
                    notification.addNotification({
                        message: "記事を削除できませんでした",
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
                <Button color={'#eb8686'} hover={'#eb5e5e'} onClick={this.handleClick}>削除する</Button>
            </div>
        )
    }
}
export default withRouter(PostDestroy)