import React from 'react'
import './Register.css';
import { Form, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
// import teacher from "./teacher.png"
// import student from "./student.png"

function Register() {

    return (
        <div>
            <Card style={{ width: '60rem' }} style={{textAlign: 'center'}}>
                <Card className="Teacher" style={{ width: '18rem' }}>
                    
                    {/* <Card.Img variant="top" src={teacher} />      */}
                    <Card.Body>
                        
                    <a href="/Teacher"> <Button variant="primary">Register as Teacher</Button></a>
                    </Card.Body>
                </Card>
                <Card className="Teacher" style={{ width: '18rem' }}>
                        
                    {/* <Card.Img variant="top" src={student} /> */}
                    <Card.Body>
                        
                    <a href="/Student"> <Button variant="primary">Register as Student</Button></a>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    );
}

export default Register;