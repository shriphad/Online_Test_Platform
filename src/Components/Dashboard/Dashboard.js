import React from "react";
import isLogged from '../Service/isLogged';
import { Redirect } from "react-router-dom";


class Dashboard extends React.Component {
    render() {
        if (isLogged.getLogged()) {
            return (
                <>
                    <h1>Welcome</h1>
                </>
            )
        }
        else {

            return (
                <Redirect to="/login" />
            )
        }
    }
}
export default Dashboard;