import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import DashBoard from './Dashboard';
import isLogged from './isLogged';

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, ...props } = this.props

        return (
            <Route
                {...props}
                render={props => (
                    isLogged.getLogged() ?
                        <DashBoard /> :
                        <Redirect to='/' />
                )}
            />
        )
    }
}

export default class AllRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' component={App} />
                <ProtectedRoute path='/Dashboard' component={DashBoard} />
            </Switch>
        );
    }
}