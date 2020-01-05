import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

export default class PrivateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            isAuthenticated: false,
            token: this.props.user.token
        }
    }
    
    Auth(token) {
        if (token !== null) {
            this.setState = {
                loading: false,
                isAuthenticated: true
            }
        } else {
            this.setState = {
                loading: true,
                isAuthenticated: false
            }
        }
    }

    render() {
        const {component: Component, ...rest} = this.props
        const {loading, isAuthenticated} = this.state

        if(loading) {
            return <div className="loading">Loading</div>
        }
        return (
            <Route {...rest} render={() => {
                if (!isAuthenticated) {
                    return <Redirect to={{pathname: 'api/v1/login'}} />
                }
                return <Component {...this.props} />
            }}
            />
        )
    }
}