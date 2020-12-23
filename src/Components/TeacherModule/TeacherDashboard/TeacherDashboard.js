import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './TeacherDashboard.css'

export default function TeacherDashboard() {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const location = useLocation();
    useEffect(() => {
        setName(location.name);
        setKey(location.id);
    }, [location]);


    const ToAddStudents = (e) => {
        e.preventDefault();
    }
    const ToAddTests = (e) => {
        e.preventDefault();
    }
    const ToViewResults = (e) => {
        e.preventDefault();
    }
    const ToViewLeaderBoard = (e) => {
        e.preventDefault();
    }
    const ToViewProfile = (e) => {
        e.preventDefault();
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
                    <a href="#!">Logo</a>
                </div>
                <div>
                    <a href="#!" onClick={ToViewProfile} >Profile</a>
                </div>
                <div>
                    <a href="#!" onClick={ToAddTests} >New Test</a>
                </div>
                <div>
                    <a href="#!" onClick={ToAddStudents}>Add Students</a>
                </div>
                <div>
                    <a href="#!" onClick={ToViewResults} >View Results</a>
                </div>
                <div>
                    <a href="#!" onClick={ToViewLeaderBoard} >LeaderBoard</a>
                </div>
                <div>
                    <a href="#!" onClick={Logout} >Logout</a>
                </div>
            </div>
            <div className="TeacherMain">
                Hey {name}! your id is {key}
                <div className="AvgScoreGraph">
                    Here Comes the Average Score Graph of the Students
                </div>
                <div className="something1">
                    Something here!
                </div>
                <div className="something2">
                    Something here!
                </div>
            </div>

        </>
    );
}