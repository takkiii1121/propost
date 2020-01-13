import React, {Component} from "react"
import SimpleMDEReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from "axios"
import lscache from 'lscache'

export default class PostNew extends Component {
    constructor() {
        super()
        this.state = {title: "", content: "", token: JSON.parse(lscache.get('token'))}
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(content) {
        this.setState({content: content})
        console.log(this.state.content)
    }
    handleChange2(event) {
        this.setState({title: event.target.value})
        console.log(this.state.title)
    }
    
    handleSubmit(event) {
        alert('Posted!' + this.state.title)
        event.preventDefault()
        const headers = {headers: {Authorization: `Bearer ${this.state.token}`}}
        const data = {content: this.state.content, title: this.state.title}

        console.log(data)
        // console.log(this.state.content)

        axios
            .post('http://localhost:3001/api/v1/posts', data, headers)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <div>
                <h2>new</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" id="title" name="title" placeholder="title" title={this.state.title} onChange={this.handleChange2} />
                    <SimpleMDEReact 
                        content={this.state.content}
                        onChange={this.handleChange}
                        options={{
                            forceSync: true
                        }} />
                    <button>Send</button>
                </form>
            </div>
            
        )
    }
}