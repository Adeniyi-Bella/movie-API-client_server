import React, { useState, setState } from 'react';
// import './registration-view.scss';
import {
  Form,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
} from 'react-bootstrap';
function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        {/* <Container> */}
        <Navbar.Brand href="#home">My-Movie APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      <Container
        style={{
          maxWidth: '500px',
          minWidth: '300px',
          marginTop: '200px',
        }}
      >
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title> Welcome to the Login Page</Card.Title>
                  <Form>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Enter a user name"
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                        placeholder="Enter a password"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
    // <div className="form">
    //     <div className="form-body">
    //         <div className="username">
    //             <label className="form__label" for="firstName">First Name </label>
    //             <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
    //         </div>
    //         <div className="lastname">
    //             <label className="form__label" for="lastName">Last Name </label>
    //             <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
    //         </div>
    //         <div className="email">
    //             <label className="form__label" for="email">Email </label>
    //             <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
    //         </div>
    //         <div className="password">
    //             <label className="form__label" for="password">Password </label>
    //             <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
    //         </div>
    //         <div className="confirm-password">
    //             <label className="form__label" for="confirmPassword">Confirm Password </label>
    //             <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
    //         </div>
    //     </div>
    //     <div class="footer">
    //         <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
    //     </div>
    // </div>
  );
}

export default RegistrationForm;
