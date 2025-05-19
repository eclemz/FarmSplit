import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from "../data/CarouselData.js";



const NextArrow = ({ onClick }) => {
  return (
    <div
      className="hidden md:block md:absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  text-white md:p-[1.6rem] rounded-full  transition duration-300"
      onClick={onClick}
    >
      <i className="bx bx-chevron-right text-5xl"></i>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="hidden md:block md:absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  text-white md:p-[1.6rem] rounded-full transition duration-300"
      onClick={onClick}
    >
      <i className="bx bx-chevron-left  text-5xl"></i>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 1000, // Transition speed in ms
    slidesToShow: 1, // How many slides to show at once
    slidesToScroll: 1, // How many slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    arrows: true, // Show navigation arrows
    nextArrow: <NextArrow />, // Use custom Next Arrow
    prevArrow: <PrevArrow />, // Use custom Prev Arrow
    fade: true, // Disable fade for smoother sliding effect
    lazyLoad: "ondemand", // Load only visible slides
    cssEase: "ease-in-out", // Smooth easing for transitions

    appendDots: (dots) => (
      <div style={{ bottom: "50px" }}>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-4 h-4 rounded-full opacity-75 hover:opacity-100 cursor-pointer transition-all duration-300"
        style={{ border: "2px solid #09AF54" }}
      ></div>
    ),
  
  };

  return (
    <section className="carousel-section" aria-label="Promotional Carousel">
      <Slider {...settings} className="">
        {CarouselData.map((item, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1}: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full object-cover rounded-3xl md:h-[26.875rem] h-[16rem]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-3xl ">
              <p className="text-white lg:text-[2rem] md:text-[1.75rem] text-xl font-bold lg:px-12 md:px-8 px-4 pb-16 leading-tight">
                {item.alt.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
