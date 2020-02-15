import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import lscache from 'lscache'

export default class PrivateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: lscache.get('lscache-token')
        }
    }

    render() {
        const {component: Component, ...rest} = this.props

        return (
            <Route {...rest} render={() => {
                if (this.state.token !== undefined) {
                    return <Component {...this.props} />
                } else {
                    return <Redirect to={{pathname: '/login'}} />
                }
                
            }}
            />
        )
    }
}