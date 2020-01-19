import React, {Component} from 'react'
import lscache from 'lscache'
import axios from "axios";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class Logout extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
        alert('ログアウトしてよろしいですか？')
        const data = {id: this.props.id}

        axios
            .post('http://localhost:3001/api/v1/logout', data)
            .then((response) => {
                console.log(response.data)
                if (response.data.logout) {
                    lscache.remove('token')
                    this.props.history.push('/api/v1/posts')
                    window.location.reload()
                } else {
                    console.log('not logged out yet')
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return(
            <Button color="inherit" onClick={this.handleClick}>Logout</Button>
        )
    }
}
export default withRouter(Logout)