import "./Home.css";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import BannerSlider from "../../../components/Slider/BannerSlider";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header></Header>

      {/* IT MUST BE SLIDER WITH BANNERS */}
      <div className="container-home">
        <div className="fire">
          <h1>Welcome to Valhalla</h1>
          <svg>
            <filter id="flame">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.1 0.1"
                numOctaves="3"
                seed="4"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="8s"
                  values="0.1 0.1; 0.13 0.13"
                  repeatCount="indefinite"
                ></animate>
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                scale="4"
              ></feDisplacementMap>
            </filter>
          </svg>
        </div>
      </div>
      <BannerSlider></BannerSlider>

      <Footer></Footer>
    </>
  );
}
