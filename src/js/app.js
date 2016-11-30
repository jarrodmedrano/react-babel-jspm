import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import {createHashHistory} from 'history';
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
import Page from './components/Page';

const Index = {
    title: 'Home'
};
const Routes = {};

class App extends React.Component {
    render() {
        return (
            <div>
                <TransitionGroup component="div" transitionName="page-transition"
                                 transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </TransitionGroup>
            </div>
        );
    }
}

class RenderForcer extends React.Component {
    componentWillMount() {
        this.forceUpdate();
    }
    render() {
        return (
            <Router history={appHistory}>
                <Route path="/" component={App}>
                    <IndexRoute title={Index.title}
                                component={(props, state, params) => <Page  {...props} />}/>
                    {Routes.length ? Routes.map(function (result, id) {
                        return <Route key={id} path={result.title} title={result.title}
                                      component={(props, state, params) => <Page  {...props} />}/>;
                    }) : null}
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(
    <RenderForcer />
    , document.getElementById('app')
);
