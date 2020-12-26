import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap"
import isLogged from '../Service/isLogged';
import axios from 'axios';
import './App.css';


export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [LoginAs, setLoginAs] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const ValidateStudent = async () => {
    try {
      const req = axios.post('/api/Usersignin', {
        email: username,
        password: password
      })
      const response = await req;
      localStorage.setItem("token", response.data.token);
      setApiResponse('success');
      console.log(response);
      isLogged.setLogged();
      //RouteToStudent();
    } catch (error) {
      setApiResponse(error.response.statusText);
      console.log(error.response);
      setPassword('');
    }
  }

  const ValidateTeacher = async () => {
    try {
      const req = axios.post('/api/signin', {
        email: username,
        password: password
      })
      const response = await req;
      localStorage.setItem("token", response.data.token);
      setApiResponse('success');
      console.log(response);
      isLogged.setLogged();
      //RouteToTeacher();
    } catch (error) {
      setApiResponse(error.response.statusText);
      console.log(error.response);
      setPassword('');
    }
  }


  const Login = (event) => {
    event.preventDefault();
    //console.log(this.state.username, this.state.password);
    if (LoginAs === 'Student') {
      ValidateStudent();
    }
    else if (LoginAs === 'Teacher') {
      ValidateTeacher();
    }
  }

  return (
    <>
      {LoginAs === 'Student' ? (apiResponse === 'success' ? <Redirect to="/dashboard" /> : null) : (apiResponse === 'success' ? <Redirect to="/teacherdashboard" /> : null)}
      <Card className="App">
        <Card.Header border="secondary" style={{ textAlign: 'center' }}>
          Login
        </Card.Header>
        <Card.Body>
          <div className="Login">
            <small style={{ color: 'red' }}>{apiResponse === 'Bad Request' ? 'Please fill the email and password fields' : apiResponse === 'Unauthorized' ? 'Email or password incorrect' : null}</small>
            <Form onSubmit={Login}>
              <Form.Group controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <Form.Group>
                <Form.Label>Login As</Form.Label>
                <div onChange={e => setLoginAs(e.target.value)}>
                  <input required type="radio" value="Teacher" name="loginAs" /> Teacher
                  <input required type="radio" value="Student" name="loginAs" style={{ marginLeft: '3%' }} /> Student
              </div>
              </Form.Group>
              <a className="text-muted" style={{ float: 'right', marginRight: '1%' }} href="/register">
                Register?
                </a>
              <br></br>
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

