import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap"
import isLogged from '../Service/isLogged';
import './App.css';


export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [LoginAs, setLoginAs] = useState("");
  const history = useHistory();

  const RouteToStudent = () => {
    let path = `/dashboard`;
    history.push({
      pathname: path,
      id: 1234,
      name: 'shriphad'
    });
  }

  const RouteToTeacher = () => {
    let path = `/TeacherDashboard`;
    history.push({
      pathname: path,
      id: 1234,
      name: 'shriphad'
    });
  }

  const ValidateStudent = (user, pass) => {
    if ((user === 'shriphad') && pass === '123') {
      isLogged.setLogged();
      RouteToStudent();
    }
  }

  const ValidateTeacher = (user, pass) => {
    if ((user === 'admin') && pass === '123') {
      RouteToTeacher();
    }
  }


  const Login = (event) => {
    event.preventDefault();
    //console.log(this.state.username, this.state.password);
    if (LoginAs === 'Student') {
      ValidateStudent(username, password);
    }
    else if (LoginAs === 'Teacher') {
      ValidateTeacher(username, password);
    }
  }

  return (
    <>
      <Card className="App">
        <Card.Header border="secondary" style={{ textAlign: 'center' }}>
          Login
        </Card.Header>
        <Card.Body>
          <div className="Login">
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

