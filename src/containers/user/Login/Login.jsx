import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import './Login.css';

export default function Login(){

    return(
        <>
        <Header/>
        <div className="login-form">
        <form id="login">
            <div className="name">
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" />
            </div>

            <div className="email">
            <label htmlFor="">Email:</label>
            <br />
            <input type="text" />
            </div>

            <div className="password">
            <label htmlFor="">Password:</label>
            <br />
            <input type="password" />
            </div>
        </form>
        </div>
        <Footer/>
        </>
    )
}