import './App.css';
import Card from 'react-bootstrap/Card'
import { Form, Button } from "react-bootstrap"
import React from "react";
import { Redirect } from "react-router-dom";
import isLogged from '../Service/isLogged';

function Validate(user, pass) {
  //console.log(user, pass);
  if ((user === 'shriphad') && pass === '!shri2424') {
    isLogged.setLogged();
    //console.log(isLogged.getLogged());+

  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'username': '', 'password': '' };
  }

  Register = (event) => {
    return (
      <Redirect to="/register" />
    );
  }

  Login = (event) => {
    event.preventDefault();
    //console.log(this.state.username, this.state.password);
    Validate(this.state.username, this.state.password)
  }

  HandleUser = (event) => {
    this.setState({ 'username': event.target.value });
    //console.log(this.state);
  }
  HandlePass = (event) => {
    this.setState({ 'password': event.target.value });
    //console.log(this.state);
  }

  render() {
    return (
      <>
        <Card className="App">
          <Card.Header border="secondary" style={{ textAlign: 'center' }}>
            Login
        </Card.Header>
          <Card.Body>
            <div className="Login">
              <Form onSubmit={this.Login}>
                <Form.Group controlId="Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email"
                    onChange={this.HandleUser}
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
                    onChange={this.HandlePass}
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
}

export default App;
