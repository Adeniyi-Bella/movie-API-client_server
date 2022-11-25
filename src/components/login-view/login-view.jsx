import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Button

} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './login-view.scss';
export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');
  const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 2){
     setUsernameErr('Username must be 2 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 6){
     setPassword('Password must be 6 characters long');
     isReq = false;
    }

    return isReq;
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
    /* Send a request to the server for authentication */
    axios.post('https://imbd-movies.herokuapp.com/login', {
      
      Username: username,
      Password: password
    })
    
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      alert('No such user')
    });
  }
  };

  return (
    <>
    <Navbar bg="light" variant="light" expand="lg" >
        <Container>
        <Navbar.Brand className="brand" href="/">Movies Night</Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ml-auto">
            <Nav.Link href="/">Log-in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">Log in</span>
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font"></i>
            </span>

            <div
              className="wrap-input100 validate-input"
              // data-validate="Valid email is: a@b.c"
            >
              <div style={{marginTop: "10px"}}>Username</div>
              <input
                className="input100"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              
              <div
                className="focus-input100"
                data-placeholder=""
              ></div>
              
            </div>
            {usernameErr && <p>{usernameErr}</p>}

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <div style={{marginTop: "10px"}}>Password</div>
              <input
                className="input100"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="focus-input100"
                data-placeholder=""
              ></span>
                
            </div>
            {passwordErr && <p>{passwordErr}</p>}


            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button
                  className="login100-form-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="text-center p-t-115">
              <span className="txt1">Don’t have an account?</span>

              <Link to={`/register`}>
            <Button variant='link'>
              Sign Up
            </Button>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}