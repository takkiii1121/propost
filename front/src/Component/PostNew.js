import React, {Component} from "react"
import SimpleMDEReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from "axios"

export default class PostNew extends Component {
    constructor() {
        super()
        this.state = {title: "", content: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2
        .bind(this);
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
        const data = {content: this.state.content, title: this.state.title}
        console.log(data)

        axios
            .post('http://localhost:3001/api/v1/posts', data)
            .then((response) => {
                console.log(data)
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