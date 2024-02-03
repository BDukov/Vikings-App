import "./Welcome.css";
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="container">
      <div className="banner">
        {/* <Link to={`/home`}> */}
        <div className="fire">
          <Link to={`/home`}><h1> Enter Valhalla</h1></Link>
          <svg>
            <filter id="flame">
              <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="3" seed="4">
                <animate attributeName="baseFrequency" dur="8s" values="0.1 0.1; 0.13 0.13" repeatCount="indefinite"></animate>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="10"></feDisplacementMap>
            </filter>
          </svg>
        </div>
          {/* </Link> */}
        <p>B.DUKOV 2024 &reg;</p>
      </div>
    </div>
  );
}
