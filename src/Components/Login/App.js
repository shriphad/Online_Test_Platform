import './App.css';
import Card from 'react-bootstrap/Card'
import { Form, Button } from "react-bootstrap"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import isLogged from '../Service/isLogged';


export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const RouteChange = () => {
    let path = `/dashboard`;
    history.push(path);
  }

  const Validate = (user, pass) => {
    if ((user === 'shriphad') && pass === '123') {
      isLogged.setLogged();
      RouteChange();
    }
  }


  const Login = (event) => {
    event.preventDefault();
    //console.log(this.state.username, this.state.password);
    Validate(username, password);
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
                <a className="text-muted" style={{ float: 'right', marginRight: '1%' }} href="/register">
                  Register?
                </a>
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
  );

}

