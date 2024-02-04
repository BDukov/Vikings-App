import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navigation">
      <div className="home">
        <Link to={`/`}>
          <img src="./images/logo1.png" alt="" />
        </Link>
        <Link to={`/home`}>Home</Link>
      </div>

      <div className="nav">
        <ul id="nav">
          <li>Characters</li>
          <li>Timeline</li>
          <li>GIF-s</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="user">
        <ul id="user">
          <Link to={`/login`}>
            <li>Login</li>
          </Link>
          <li>Logout</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}
