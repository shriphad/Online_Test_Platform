import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import isLogged from '../Service/isLogged';
import Navbar from '../NavBar/NavBar';
import LiveTest from "../Test/LiveTest";
import History from "../Test/History";
import LeaderBoard from "../Test/LeaderBoard";
import './Dashboard.css';


export default function Dashboard() {
    const [key, setKey] = useState('Live Tests');

    if (isLogged.getLogged()) {
        return (
            <>
                <Navbar />
                <div className="Dash">
                    <h5>Hi</h5>
                    <h6>Wish You all the best!!!</h6>
                </div>
                <div className="box">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="LiveTest" title="Live Tests">
                            <LiveTest />
                        </Tab>
                        <Tab eventKey="History" title="History">
                            <History />
                        </Tab>
                        <Tab eventKey="LeaderBoard" title="LeaderBoard">
                            <LeaderBoard />
                        </Tab>
                    </Tabs>
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