import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import './Login.css';

export default function Login(){

    return(
        <>
        <Header/>
        <div className="login-form">
        <form id="login">

            {/* <div className="name">
            <div className="fire">
            <label htmlFor="">Name:</label>
            <svg>
            <filter id="flame">
              <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="3" seed="4">
                <animate attributeName="baseFrequency" dur="8s" values="0.1 0.1; 0.13 0.13" repeatCount="indefinite"></animate>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
          </svg>
            </div>
            <br />
            <input type="text" />
            </div> */}

            <div className="email">
            <div className="fire">
         <label htmlFor="">Email</label>
         <svg>
            <filter id="flame">
              <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="3" seed="4">
                <animate attributeName="baseFrequency" dur="8s" values="0.1 0.1; 0.13 0.13" repeatCount="indefinite"></animate>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
          </svg>
            </div>
            <br />
            <input type="text" />
            </div>

            <div className="password">
                <div className="fire">
            <label htmlFor="">Password</label>
            <svg>
            <filter id="flame">
              <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="3" seed="4">
                <animate attributeName="baseFrequency" dur="8s" values="0.1 0.1; 0.13 0.13" repeatCount="indefinite"></animate>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
          </svg>
                </div>
            <br />
            <input type="password" />
            </div>
        </form>
        </div>
        <Footer/>
        </>
    )
}