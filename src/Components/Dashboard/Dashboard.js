import React from "react";
import isLogged from '../Service/isLogged';
import Navbar from '../NavBar/NavBar';
import { Redirect } from "react-router-dom";


class Dashboard extends React.Component {
    render() {
        if (isLogged.getLogged()) {
            return (
                <>
                    <Navbar />
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