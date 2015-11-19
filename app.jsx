import React from 'react'
import { render } from 'react-dom'

// First we import some components...
import { Router, Route, Link } from 'react-router'
import Hero from 'components/hero.jsx!'
import Login from 'components/login.jsx!'

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Link>s */}
                <ul>
                    <li><Link to="/hero">Hero</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
    <Router>
        <Route path="/" component={App}>
            <Route path="hero" component={Hero} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
), document.body)