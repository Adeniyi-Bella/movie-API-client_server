import React, { useState } from 'react';
import './login-view.scss';

interface ButtonProps {
  onLoggedIn: (username: string) => void;
}
// handleSubmit: (e: { preventDefault: () => void})=> void;
export function LoginView(props: ButtonProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = function (e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">
              Welcome
            </span>
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font"></i>
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input
                className="input100"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="Email"
              ></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input100"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="focus-input100"
                data-placeholder="Password"
              ></span>
            </div>

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

              <a className="txt2" href="#">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
