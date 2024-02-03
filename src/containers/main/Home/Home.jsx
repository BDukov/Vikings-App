import "./Home.css";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="container">


       <Header></Header>

       {/* IT MUST BE SLIDER WITH BANNERS */}
        <div className="banner-home-page">
        </div>
      <h1>Hello</h1>

        <Footer></Footer>

    </div>

    </>
  );
}
