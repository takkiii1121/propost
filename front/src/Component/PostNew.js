import React, {Component} from "react"
import SimpleMDEReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from "axios"
import lscache from 'lscache'
import marked from 'marked'
import { withRouter } from "react-router"
import NotificationSystem from 'react-notification-system';
import { PageColor, PageTitle } from "../StyledComponent/Page"
import {CreateButton, TitleInput, MarkdownInput} from "../StyledComponent/Form"

class PostNew extends Component {
    constructor() {
        super()
        this.state = {title: "", content: "", token: lscache.get('token')}
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.notificationSystem = React.createRef()
    }
    
    handleChange(content) {
        this.setState({content: marked(content)})
        console.log(this.state.content)
    }
    handleChange2(event) {
        this.setState({title: event.target.value})
        console.log(this.state.title)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        const data = {content: this.state.content, title: this.state.title}
        const notification = this.notificationSystem.current

        console.log(data)
        // console.log(this.state.content)

        axios
            .post('http://localhost:3001/api/posts', data, headers)
            .then((response) => {
                console.log(response.data.posted)
                if (response.data.posted) {
                    this.props.history.push({pathname: '/', state: {message: "投稿しました", level: "success"}})
                } else {
                    notification.addNotification({
                        message: "投稿に失敗しました",
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
            <PageColor>
                <NotificationSystem ref={this.notificationSystem} />
                <PageTitle>記事作成</PageTitle>
                <form onSubmit={this.handleSubmit} >
                    <TitleInput type="text" id="title" name="title" placeholder="Title" title={this.state.title} onChange={this.handleChange2} />
                    <MarkdownInput>
                        <SimpleMDEReact 
                            content={this.state.content}
                            onChange={this.handleChange}
                            options={{
                                forceSync: true
                            }} />
                    </MarkdownInput>
                    <CreateButton>送信</CreateButton>
                </form>
            </PageColor>
            
        )
    }
}
export default withRouter(PostNew)