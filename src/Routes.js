import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "./Components/Login/App";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFound from "./Components/Notfound/NotFound";
import Student from "./Components/Student/Student";
import Teacher from "./Components/Teacher/Teacher";
const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/register/student">
                <Student />
            </Route>
            <Route exact path="/register/teacher">
                <Teacher />
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