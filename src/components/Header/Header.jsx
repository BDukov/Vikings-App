import "./Header.css";
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLogout } from "../../hooks/useLogout";
// import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

library.add(faUser);

export default function Header() {

  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const navigate = useNavigate();

  return (
    <div className="navigation">
      <div className="home">
        <Link to={`/`}>
          <img src="/images/logo1.png" alt="" id="logo" />
        </Link>
        <Link to={`/home`}>Home</Link>
      </div>

      <div className="nav">
        <ul id="nav">
          <li>Characters</li>
          <li>Timeline</li>
          <li>GIF-s</li>
          <li>Shop</li>
          <li id="menu">Menu</li>
        </ul>
      </div>

      <div className="user">
      <FontAwesomeIcon id="user-icon"icon="fa-regular fa-user" style={{color: "#fcfcfc",}} />
        <ul id="user">
          {!user && <>
            <Link to={`/login`}>
              <li>Login</li>
            </Link>
             <Link to={`/register`}>
              <li>Register</li>
            </Link>
          </>

          }
         {user && <Link to={`/home`} onClick={logout}><li>Logout</li></Link> } 
        </ul>
      </div>
    </div>
  );
}
