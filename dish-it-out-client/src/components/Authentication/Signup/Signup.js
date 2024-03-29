import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <form>
        <h1>Join Now!</h1>
        <div className="inner-form-container">
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              // value={username}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              // value={email}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={handleSignupInput}
            />
          </div>
        </div>
        <div>
          <Link to="/login" id="login-link">
            Already Registered?
          </Link>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
