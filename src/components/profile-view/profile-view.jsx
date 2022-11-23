import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Container,
  Form,
  Button,
  Card,
  CardGroup,
  Col,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';

// import { updateUser, deleteUser } from '../../actions/actions';

// import './profile-view.scss';
export default function ProfileView(props) {
  console.log(props.user.Username);
  const [username, setUsername] = useState(props.user.Username);
  const [currentEmail, setnewEmail] = useState(props.user.Email);
  const [currentname, setCurrentname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [birthdayErr, setBirthdayErr] = useState('');
  // const { user, favoriteMovies, removeFavorite, onBackClick } = props;
console.log(props.user);
  // const Username = localStorage.getItem('user');


  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username required');
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr('Username must be 5 or more characters');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be 6 or more characters');
      isReq = false;
    }
    if (!email) {
      setEmailErr('Email required');
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setEmailErr('Email must be a valid email address');
      isReq = false;
    }

    return isReq;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const isReq = validate();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (isReq && token !== null && user !== null) {
      axios
        .put(
          `https://imbd-movies.herokuapp.com/users/${user}`,

          {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          const data = res.data;
          console.log(data);
          localStorage.setItem('user', data.Username);
          alert(
            'Update successful! Your changes will be visible after the next login.'
          );
        })
        .catch((e) => {
          console.error(e);
          alert('Unable to update user infos :(');
        });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
    if (confirm('Are you sure? This cannot be undone!')) {
      axios
        .delete(`https://imbd-movies.herokuapp.com/users/${user}`, {
          // headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          alert(
            `Your account has been deleted. We're sorry to see you go!`
          );
          localStorage.clear();
          // // deleteUser({});
          // console.log(119);
          window.location.reload(false);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Container className="profile-container">
      <Card bg="dark" text="light" className="profile-card">
        <Card.Header className="text-center" as="h5">
          Profile
        </Card.Header>
        <Card.Body>
          <CardGroup>
            {/* <Card bg="dark" border="dark" text="light">
              <span className="label headline-profile-update">
                PROFILE DETAILS
              </span>
              <Form
                style={{
                  width: '150px',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Group
                  className="profile-form-group-username"
                  controlId="formGroupUsername"
                >
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={username}
                  />
                </Form.Group>
                <Form.Group
                  className="profile-form-group-username"
                  controlId="formGroupUsername"
                >
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentEmail}
                  />
                </Form.Group>
                <Form.Group
                  className="profile-form-group-username"
                  controlId="formGroupUsername"
                >
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control type="text" placeholder={birthday} />
                </Form.Group>
              </Form>
            </Card> */}
            <Card bg="dark" border="dark" text="light">
              <span className="label text-center headline-profile-update">
                Update profile information
              </span>
              <Form>
                <Form.Group
                  className="profile-form-group-username"
                  controlId="formGroupUsername"
                >
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder= 'Enter'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    
                    required
                  />
                  {usernameErr && <p>{usernameErr}</p>}
                </Form.Group>
                <Form.Group
                  className="profile-form-group-password"
                  controlId="formGroupPassword"
                >
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New password must be 6 or more characters"
                    minLength="6"
                    required
                  />
                  {passwordErr && <p>{passwordErr}</p>}
                </Form.Group>
                <Form.Group
                  className="profile-form-group-email"
                  controlId="formGroupEmail"
                >
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={currentEmail}
                    required
                  />
                  {emailErr && <p>{emailErr}</p>}
                </Form.Group>
                <Form.Group
                  className="profile-form-group-birthday"
                  controlId="formGroupBirthday"
                >
                  <Form.Label>Date of birth:</Form.Label>
                  <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Enter your birthday"
                  />
                  {birthdayErr && <p>{birthdayErr}</p>}
                </Form.Group>
                <Button
                  className="button-profile-view-update"
                  variant="secondary"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Form>
            </Card>
          </CardGroup>
        </Card.Body>

        <Card.Footer
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Card bg="dark" border="dark" text="light">
            <Col>
              <Button
                className="button button-profile-view-delete"
                variant="danger"
                type="submit"
                onClick={handleDelete}
              >
                DELETE ACCOUNT PERMANENTLY
              </Button>
            </Col>
          </Card>
          <Button
            onClick={() => {
              props.onBackClick(null);
            }}
          >
            Back To Home
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

