import React, { useState } from 'react'
import './Student.css';
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export default function Student() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [phone, setphone] = useState();
    const [apiResponse, setApiResponse] = useState("");

    const RegisterForm = async () => {
        if (password === Confirmpassword) {
            axios.post('/api/Usersignup', {
                email: username,
                password: password,
                PhoneNo: phone
            })
                .then(function (response) {
                    setApiResponse('success');
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <>
            {(apiResponse === 'success' ? <Redirect to="/login" /> : null)}
            <Card className="StudentCard">
                <Card.Header border="secondary" style={{ textAlign: 'center' }}>
                    Register as Student
                        </Card.Header>
                <Card.Body>
                    <div className="Student">
                        <Form onSubmit={RegisterForm} >
                            <Form.Group controlId="Number">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Number"
                                    value={phone}
                                    onChange={e => setphone(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Form.Group>



                            <Form.Group controlId="Pass">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="ConfirmPass">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={Confirmpassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
                <Card.Footer style={{ textAlign: 'center' }}>
                    <small className="text-muted" >Best of Luck!</small>
                </Card.Footer>
            </Card>
        </>
    );
}