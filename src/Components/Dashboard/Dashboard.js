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
                    <div className="box">
                        <h3>Hi name</h3>
                        <h4>Wish You all the best!!!</h4>
                    </div>

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