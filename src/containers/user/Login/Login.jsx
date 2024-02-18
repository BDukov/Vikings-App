/* eslint-disable react/no-unescaped-entities */
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { useState } from "react";
import { useLogin } from '../../../hooks/useLogin';

import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const emailOnChangeHandler = (e) => {
      setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="login-form">
        <form onSubmit={handleSubmit} id="login">
          <div className="email">
            <label htmlFor="">Email</label>
            <br />
            <input 
            required
            type="email"
            onChange={emailOnChangeHandler}
            value={email}
            id="email"
            />
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <br />
            <input type="password"
            required
            onChange={passwordOnChangeHandler} />
            {error && <p className="error-msg">{error}</p>}
          </div>

          <div className="button">
            <button type="submit" className="btn">
              Login
            </button>
            <p id="signUpMsg">
              Don't have an account? <Link>Register now!</Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
