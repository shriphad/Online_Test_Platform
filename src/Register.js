import React, { useState } from 'react'
import './Register.css';
import { Form, Button, Col, InputGroup } from "react-bootstrap"
import Card from 'react-bootstrap/Card'

function Register() {

    return (
        <div>
            <>
                <Card className="App">
                    <Card.Header border="secondary" style={{ textAlign: 'center' }}>
                        Register
                        </Card.Header>
                    <Card.Body>
                        <div className="Register">
                            <Form /* onSubmit={this.RegisterForm} */>
                                <Form.Group controlId="Email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email"
                                    // onChange={this.HandleUser}
                                    />
                                </Form.Group>



                                <Form.Group controlId="Pass">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                    //onChange={this.HandlePass}
                                    />
                                </Form.Group>

                                <Form.Group controlId="ConfirmPass">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                    //onChange={this.HandleUser}
                                    />
                                </Form.Group>

                                {/* {<Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>} */}

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
        </div>
    );
}

export default Register;