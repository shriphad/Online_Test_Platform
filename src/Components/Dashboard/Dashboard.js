import React from "react";
import isLogged from '../Service/isLogged';
import Navbar from '../NavBar/NavBar';
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Dashboard() {
    const [name, setName] = useState('');
    const location = useLocation();
    useEffect(() => {
        //console.log(location.name);
        setName(location.name);
    }, [location]);

    if (isLogged.getLogged()) {
        return (
            <>
                <Navbar />
                <div className="box">
                    <h3>Hi {name}</h3>
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
export default Dashboard;