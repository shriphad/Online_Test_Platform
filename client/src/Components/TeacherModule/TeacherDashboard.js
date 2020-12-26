import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import AddStudents from './AddStudents/AddStudents';
import Dashboard from './Dashboard/Dashboard';
import AddTests from './AddTests/AddTests';
import ViewResults from './ViewResults/ViewResults';
import ViewProfile from "./ViewProfile/ViewProfile";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import './TeacherDashboard.css'

export default function TeacherDashboard() {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [addStudent, setStudent] = useState(false);
    const [dashboard, setDashboard] = useState(true);
    const [Tests, setTests] = useState(false);
    const [results, setResults] = useState(false);
    const [leader, setLeader] = useState(false);
    const [profile, setProfile] = useState(false);

    //const [checked, setChecked] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setName(location.name);
        setKey(location.id);
    }, [location]);

    const ToDashboard = () => {
        setDashboard(true);
        setStudent(false);
        setTests(false);
        setResults(false);
        setProfile(false);
        setLeader(false);
        console.log(key);
    }
    const ToAddStudents = (e) => {
        setDashboard(false);
        setStudent(true);
        setTests(false);
        setResults(false);
        setProfile(false);
        setLeader(false);
    }
    const ToAddTests = (e) => {
        setDashboard(false);
        setStudent(false);
        setTests(true);
        setResults(false);
        setProfile(false);
        setLeader(false);
    }
    const ToViewResults = (e) => {
        setDashboard(false);
        setStudent(false);
        setTests(false);
        setResults(true);
        setProfile(false);
        setLeader(false);
    }
    const ToViewLeaderBoard = (e) => {
        setDashboard(false);
        setStudent(false);
        setTests(false);
        setResults(false);
        setProfile(false);
        setLeader(true);
    }
    const ToViewProfile = (e) => {
        setDashboard(false);
        setStudent(false);
        setTests(false);
        setResults(false);
        setProfile(true);
        setLeader(false);
    }
    const Logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
    }


    return (
        <>
            <div className="TeacherNav">
                <div>
                    <a href="#Dashboard" onClick={ToDashboard} >Dashboard</a>
                </div>
                <div>
                    <a href="#Profile" onClick={ToViewProfile} >Profile</a>
                </div>
                <div>
                    <a href="#Tests" onClick={ToAddTests} >New Test</a>
                </div>
                <div>
                    <a href="#Students" onClick={ToAddStudents}>Add Students</a>
                </div>
                <div>
                    <a href="#Results" onClick={ToViewResults} >View Results</a>
                </div>
                <div>
                    <a href="#LeaderBoard" onClick={ToViewLeaderBoard} >LeaderBoard</a>
                </div>
                <div>
                    <a href="#Logout" onClick={Logout} >Logout</a>
                </div>
            </div>
            <div className="TeacherMain">
                {dashboard ? < Dashboard name={name} id={key} /> : addStudent ? < AddStudents name={name} id={key} /> : Tests ? < AddTests name={name} id={key} /> : results ? < ViewResults name={name} id={key} /> : leader ? < LeaderBoard name={name} id={key} /> : profile ? < ViewProfile name={name} id={key} /> : null}
            </div>

        </>
    );
}