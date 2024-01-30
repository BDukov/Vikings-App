import "./Welcome.css";
// import Link from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="container">
      <div className="banner">
        {/* <Link to={`/home`}> */}
          <h1> Enter to Valhala!</h1>
          {/* </Link> */}
        <p>B.DUKOV 2024 &reg;</p>
      </div>
    </div>
  );
}
