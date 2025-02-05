import React from 'react';
import Slider from 'react-slick';

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all focus:outline-none"
    aria-label="Next slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all focus:outline-none"
    aria-label="Previous slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true
  };

  return (
    <div className="relative focus:outline-none">
      <style jsx global>{`
        .slick-slide, .slick-slide * {
          outline: none !important;
        }
        .slick-prev:before, .slick-next:before {
          display: none;
        }
      `}</style>
      <Slider {...settings}>
        <div className="h-[600px]">
          <img 
            src={`./assets/1.png`} 
            alt="Service 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[600px]">
          <img 
            src={`./assets/2.png`} 
            alt="Service 2" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[600px]">
          <img 
            src={`./assets/3.png`} 
            alt="Service 3" 
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel; 