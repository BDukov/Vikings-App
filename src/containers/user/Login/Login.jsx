/* eslint-disable react/no-unescaped-entities */
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      <div className="login-form">
        <form id="login">
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
