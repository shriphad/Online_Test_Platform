import React from 'react'
import './Register.css';
import Card from 'react-bootstrap/Card'
import teacher from "./teacher.png"
import student from "./student.png"
import { useHistory } from "react-router-dom";

function Register() {

    const history = useHistory();

    const ToStudent = (e) => {
        e.preventDefault();
        history.push('/register/student');
    }

    const ToTeacher = (e) => {
        e.preventDefault();
        history.push('/register/teacher');
    }
    return (
        <Card className="RegisterCard">
            <Card.Header border="secondary" style={{ textAlign: 'center' }}>
                Register As
            </Card.Header>
            <Card.Body>
                <div className="parent">
                    <a id="left" href="#!" onClick={ToStudent}>
                        <img src={student} alt="student" width="100%" height="250" />
                        <br></br>
                    Student
                </a>
                    <a id="right" href="#!" onClick={ToTeacher}>
                        <img src={teacher} alt="teacher" width="100%" height="250" />
                        <br></br>
                    Teacher
                </a>
                </div>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'center' }}>
                <small className="text-muted" >Best of Luck!</small>
            </Card.Footer>
        </Card>
    );
}

export default Register;