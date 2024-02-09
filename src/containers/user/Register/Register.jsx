/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { useRegister } from "../../../hooks/useRegister";

import { Link } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

import "./Register.css";

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [years, setYears] = useState(false);

  const [errors, setErrors] = useState({});

  const {error, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password !== repassword) {
      setErrors({ password: "Passwords don't match!"});
      return;
    }
    setErrors({});
    register(email, password)
  }

  const handleNameChange = (e) => {
    setName(e.target.value.trim());
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  }

  const handleRePasswordChange = (e) => {
    setRepassword(e.target.value.trim());
  }

  const handleYearsChange = (e) => {
    setYears(!!e.target.value);
  }



  return (
    <>
      <Header></Header>
      <div className="register-form">
        <form id="register" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" required id="name" value={name} onChange={handleNameChange}/>
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <br />
            <input type="text" required id="email" value={email} onChange={handleEmailChange}/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <br />
            <input type="password" required id="password" value={password} onChange={handlePasswordChange}/>
            <br />
            <label htmlFor="">Retype Password</label>
            <br />
            <input type="password" required id="repassword" value={repassword} onChange={handleRePasswordChange}/>
      {errors && <p className="error-msg">{errors.password}</p>}
          </div>

          <div className="years">
            <label htmlFor="">18 Years:</label>
            <input type="checkbox" id="years" value={years} onChange={handleYearsChange}/>
          </div>
          <div className="button">
            <button type="submit" className="btn" id="btn">
              Register
            </button>
            <p id="loginMsg">
              Have an account? <Link>Login here!</Link>
            </p>
           {error && <p className="error-msg">{error}</p> } 
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
