import "./Footer.css";


export default function Footer() {

    const text = `This application is crafted with passion for fans of the Vikings Series and forms an integral part of Borislav Dukov's educational projects. Created solely for educational purposes, it serves as a testament to the dedication and commitment to learning. As an enthusiastic learner, this project embodies the practical application of acquired skills in web development, design, and technology. By delving into the realm of the Vikings Series, it not only provides an immersive experience for enthusiasts but also showcases a commitment to continuous growth and knowledge acquisition. Borislav Dukov's educational initiatives aim to inspire curiosity, creativity, and a love for learning. The project stands as a living example of the journey in mastering web development while celebrating the rich narrative of the Vikings Series. Your support is invaluable, contributing to the ongoing educational exploration and sharing of knowledge within the community.`;
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
