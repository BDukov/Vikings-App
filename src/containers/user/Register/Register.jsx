/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

import "./Register.css";

export default function Register() {
  return (
    <>
      <Header></Header>
      <div className="register-form">
        <form id="register">
          <div className="name">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <br />
            <input type="text" />
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
          </div>

          <div className="years">
            <label htmlFor="">18 Years:</label>
            <input type="checkbox" />
          </div>

          <div className="button">
            <button type="submit" className="btn">
              Register
            </button>
            <p id="loginMsg">
              Have an account? <Link>Login here!</Link>
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
