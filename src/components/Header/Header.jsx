import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="navigation">
        <div className="home">
          <Link to={`/`}>Vikings Home</Link>
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
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
