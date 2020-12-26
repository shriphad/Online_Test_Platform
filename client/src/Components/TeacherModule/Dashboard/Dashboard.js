import React from 'react'
import './Dashboard.css'

export default function AddTests(props) {
    return (
        <>
            Hey {props.name}! your id is {props.id}
            <div className="AvgScoreGraph">
                Here Comes the Average Score Graph of the Students
                </div>
            <div className="something1">
                Something here!
                </div>
            <div className="something2">
                Something here!
                </div>
        </>
    );
}