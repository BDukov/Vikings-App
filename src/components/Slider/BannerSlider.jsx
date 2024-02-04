import Slider from "react-slick";
// import peak from '../../assets/peak.jpg';
// import ragnar from '../../assets/ragnar.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlider.css";

export default function BannerSlider() {
  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <div className="container-banner">
      <Slider {...sliderSettings}>
        <div className="card">
          <img src="/images/ragnar.jpg" alt="" />
        </div>
        <div className="card">
          <img src="/images/vikings.jpg" alt="" />
        </div>
        <div className="card">
          <img src="/images/peakpx.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
