import "./Footer.css";


export default function Footer() {

    const text = `This application is a dedication to Viking Series enthusiasts and is an essential component of Borislav Dukov's educational projects. Exclusively designed for educational purposes, it represents a practical showcase of acquired skills in web development, serving as a testament to commitment and growth. As a passionate learner, this project not only immerses fans in the world of the Vikings Series but also demonstrates continuous learning in action. Borislav Dukov's educational initiatives aim to inspire curiosity and creativity, and your support contributes to the ongoing journey of knowledge sharing within the community. Thank you for being a part of this educational endeavor!`;
  return (
    <>
      <div className="footer">
           <div className="info">
            <article>
              <h3>Contacts</h3>
              <ul>
                <li>
                  <a href="#">Phone: 0893003004</a>
                </li>
                <li>
                  <a href="#">Addres: Dimitrovgrad, Haskovo, Bulgaria</a>
                </li>
                <li>
                  <a href="#">email: borislav.dukov@gmail.com</a>
                </li>
              </ul>
            </article>
            <article className="about-footer">
              <h3>About Us</h3>
              <p>
              {text}
              </p>
            </article>


            <article>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </article>


        </div>
        <p className="line"></p>

          <div className="rights">
          <p>B.DUKOV 2024 &reg;</p>
          </div>

      </div>
    </>
  );
}
