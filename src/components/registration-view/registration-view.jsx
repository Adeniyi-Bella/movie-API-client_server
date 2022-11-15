// import React from 'react';
// import './registration-view.scss';
// import axios from 'axios';

// const Regex = RegExp(
//   /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
// );
// export class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       errors: {
//         username: '',
//         email: '',
//         password: '',
//       },
//     };
//     // this.state = initialState;
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     this.setState({ name: value });
//     console.log(name);
//     let errors = this.state.errors;
//     switch (name) {
//       case 'username':
//         errors.username =
//           value.length < 5
//             ? 'Username must be 5 characters long!'
//             : '';
//         break;
//       case 'email':
//         errors.email = Regex.test(value) ? '' : 'Email is not valid!';
//         break;
//       case 'password':
//         errors.password =
//           value.length < 8
//             ? 'Password must be eight characters long!'
//             : '';
//         break;
//       default:
//         break;
//     }
//     this.setState(
//       Object.assign(this.state, { errors, [name]: value })
//     );
//     console.log(this.state.errors);
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email } = this.state;
//     console.log(email);
//     let validity = true;
//     if (!email){validity= false}
//     Object.values(this.state.errors).forEach(
//       (val) => val.length > 0 && (validity = false)
//     );
//     if (validity == true) {
//       componentDidMount() {
//         const { username, email, password } = this.state;
//       axios.post("https://imbd-movies.herokuapp.com/users", {

//         Username: username,
//         Password: password,
//         Email: email,
//       })
//       .then((response) => {
//         const data = response.data;
//         console.log(data);
//         window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
//       })
//       .catch((e) => {
//         console.log("error registering the user");
//       });}
//     // / console.log(this.initialState.username);
//       // console.log('Registering can be done');
//     } else {
//       console.log('You cannot be registered!!!');
//     }
//   };

//   render() {
//     const { errors } = this.state;
//     return (
//       <div className="wrapper">
//         <div className="form-wrapper">
//           <h2>Sign Up</h2>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className="fullName">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 onChange={this.handleChange}
//                 required
//               />
//               {errors.username.length > 0 && (
//                 <span style={{ color: 'red' }}>
//                   {errors.username}
//                 </span>
//               )}
//             </div>
//             <div className="email">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={this.handleChange
//                 }
//               />
//               {errors.email.length > 0 && (
//                 <span style={{ color: 'red' }}>{errors.email}</span>
//               )}
//             </div>
//             <div className="password">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 onChange={this.handleChange}
//               />
//               {errors.password.length > 0 && (
//                 <span style={{ color: 'red' }}>
//                   {errors.password}
//                 </span>
//               )}
//             </div>
//             <div className="submit">
//               <button>Register Me</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'react-bootstrap';

import './registration-view.scss';
export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [birthdayErr, setBirthdayErr] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios.post('https://imbd-movies.herokuapp.com/users', {
          Username: username,
          Password: password,
          Email: email
        
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          alert('Registration successful! Please login.');
          window.open('/', '_self');
        })
        .catch((e) => {
          console.error(e);
          alert('Unable to register :(');
        });
    }
  };

  return (
    <Card bg="dark" text="light" className="registration-card">
      <Card.Header className="text-center" as="h5">
        Register
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group
            className="registration-form-group-username"
            controlId="formGroupUsername"
          >
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            {usernameErr && <p>{usernameErr}</p>}
          </Form.Group>
          <Form.Group
            className="registration-form-group-password"
            controlId="formGroupPassword"
          >
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password must be 6 or more characters"
              minLength="6"
              required
            />
            {passwordErr && <p>{passwordErr}</p>}
          </Form.Group>
          <Form.Group
            className="registration-form-group-email"
            controlId="formGroupEmail"
          >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            {emailErr && <p>{emailErr}</p>}
          </Form.Group>
          <Form.Group controlId="formGroupBirthday">
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
            className="button-registration-view"
            variant="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

RegistrationView.propTypes = {};