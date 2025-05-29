import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial({ data }) {



  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // How many slides to show at once
    slidesToScroll: 1, // How many slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    arrows: false, // Show navigation arrows
    fade: true, // Disable fade for smoother sliding effect
    lazyLoad: "ondemand", // Load only visible slides
    cssEase: "ease-in-out", // Smooth easing for transitions

    appendDots: (dots) => (
      <div style={{ bottom: "2px", display: "flex" }}>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="md:w-3 md:h-3 w-2 h-2 rounded-full opacity-75 hover:opacity-100 cursor-pointer transition-all duration-300"
        style={{ border: "2px solid #09AF54" }}
      ></div>
    ),
  };
  const filteredData = data.filter(
    (card) => card.icon && card.name && card.text
  );
  return (
    <section
      className="flex flex-col self-stretch items-center lg:py-14 lg:px-24 lt:px-8 lt:py-14 md:py-14 md:px-8 py-8 px-4 gap-8 bg-[#FFF1EF]"
      aria-label="Customer Testimonials"
    >
      {/* for mobile  */}
      <header className="md:hidden flex justify-center items-center self-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div
            className="flex items-center p-2 gap-2 rounded-lg  justify-center bg-white"
            aria-hidden="true"
          >
            <h2 className="text-[0.625rem] font-bold text-red-400">
              TESTIMONIAL
            </h2>
          </div>
          <h3 className="text-2xl text-[#424242] self-stretch text-center font-bold">
            Listen to what our customers <br />
            are saying.
          </h3>
        </div>
      </header>
      
      <div
        className=" md:hidden items-start self-stretch gap-4 "
        role="list"
      > 
        <Slider {...settings}>
        {filteredData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 self-stretch pb-4"
            role="listitem"
          >
            {" "}
            <div
              className="md:hidden flex flex-col items-start gap-[0.6875rem] p-4  bg-white rounded-lg self-stretch"
              aria-labelledby={`testimonial-name-${index}`}
              aria-describedby={`testimonial-text-${index}`}
            >
              <p className="text-sm text-[#424242] self-stretch">
                {card.text}
              </p>
              <div className="flex flex-col items-start justify-center selft-stretch gap-2 ">
                <h3 className="text-sm text-[#424242] font-bold self-stretch">
                  {card.name}
                </h3>
                <p className="text-xs text-[#686868] ">
                  {card.desc}
                </p>
                <img
                  src={card.icon}
                  alt=""
                  className="h-9 w-9"
                />
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>


        {/* for desktop */}
      <header className=" hidden md:flex justify-center items-center self-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div
            className="flex items-center p-2 gap-2 rounded-lg  justify-center bg-white"
            aria-hidden="true"
          >
            <h2 className="lg:text-sm md:text-xs text-[0.625rem] font-bold text-red-400">
              TESTIMONIAL
            </h2>
          </div>
          <h3 className="lg:text-[2.5rem] md:text-[2rem] text-2xl lg:leading-[3rem] md:leading-[2.4rem]  text-[#424242] self-stretch text-center font-bold">
            Listen to what our customers <br />
            are saying.
          </h3>
        </div>
      </header>
      <div
        className=" hidden md:grid lg:grid-cols-3 md:grid-cols-2 items-start self-stretch gap-8 "
        role="list"
      >
        {filteredData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 self-stretch"
            role="listitem"
          >
            {" "}
            <div
              className="flex flex-col items-start gap-[0.6875rem] p-4 flex-1  bg-white rounded-lg md:self-auto self-stretch"
              aria-labelledby={`testimonial-name-${index}`}
              aria-describedby={`testimonial-text-${index}`}
            >
              <p className="lg:text-xl lt:text-lg md:text-lg text-sm text-[#424242] self-stretch">
                {card.text}
              </p>
              <div className="flex flex-col items-start justify-center selft-stretch gap-2 ">
                <h3 className="lg:text-xl lt:text-lg md:text-lg text-sm text-[#424242] font-bold self-stretch">
                  {card.name}
                </h3>
                <p className="lg:text-base lt:text-sm md:text-sm text-xs text-[#686868] ">
                  {card.desc}
                </p>
           
                <img
                  src={card.icon}
                  alt=""
                  className="lg:w-[3.75rem] lg:h-[3.75rem] lt:w-[3.25rem] lt:h-[3.25rem] md:w-[3.25rem] md:h-[3.25rem] h-9 w-9"
                />
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
