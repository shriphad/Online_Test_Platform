import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "./App";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);
export default Routes;