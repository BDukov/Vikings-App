import Slider from 'react-slick';
// import peak from '../../assets/peak.jpg';
// import ragnar from '../../assets/ragnar.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css'

export default function BannerSlider() {
    const sliderSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      };
    
    return(
        <div className="container-banner">

        <Slider {...sliderSettings}>
        <div className='card'>
            <img src="/images/ragnar.jpg" alt=""/>
          {/* Your content for the first slide */}
        </div>
        <div className='card'>
            <img src="/images/peakpx.jpg" alt="" />
          {/* Your content for the second slide */}
        </div>
        {/* Add more slides as needed */}
      </Slider>
        </div>
    )
}