import React from 'react'
import { render } from 'react-dom'

// First we import some components...
import { Router, Route, Link } from 'react-router'
import Hero from 'components/hero.jsx!'
import Login from 'components/login.jsx!'

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/hero">Hero</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

render((
    <Router>
        <Route path="/" component={App}>
            <Route path="hero" component={Hero} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
), document.body)