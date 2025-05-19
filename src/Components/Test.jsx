// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function ScrollAnimation() {
//   // Controls the animation
//   const controls = useAnimation();

//   // Detects when the component is in view
//   const [ref, inView] = useInView({
//     threshold: 0.2, // 20% of the element is visible
//   });

//   // Start animation when the element comes into view
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   // Animation variants
//   const variants = {
//     hidden: { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }, // Start hidden behind the section
//   visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }, // Fully visible, pushed up
//   };

//   return (
//     <motion.div
//       ref={ref} // Ties the motion.div to the in-view hook
//       initial="hidden" // Initial state
//       animate={controls} // Animation controls
//       variants={variants} // Animation variants
//       transition={{ duration: 0.8 }} // Animation duration
//       className="text-center"
//     >
//       <p className="text-2xl font-bold text-gray-800">
//         This text moves up as you scroll
//       </p>
//     </motion.div>
//   );
// }

// export default ScrollAnimation;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Testimonial({ data }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     appendDots: (dots) => (
//       <div className="testimonial-dots">
//         <ul>{dots}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="testimonial-dot"></div>
//     ),
//   };

//   const filteredData = data.filter(
//     (card) => card.icon && card.name && card.text
//   );

//   return (
//     <section className="testimonial-section">
//       <header className="flex flex-col items-center gap-4">
//         <h2 className="text-xl font-bold text-red-400">TESTIMONIAL</h2>
//         <h3 className="text-2xl font-bold text-gray-700 text-center">
//           Listen to what our customers are saying.
//         </h3>
//       </header>

//       {/* Mobile Carousel */}
//       <div className="testimonial-carousel">
//         <Slider {...settings}>
//           {filteredData.map((card, index) => (
//             <div key={index} className="testimonial-slide">
//               <p className="text-sm text-gray-700">{card.text}</p>
//               <h3 className="text-md font-bold text-gray-800">{card.name}</h3>
//               <p className="text-xs text-gray-500">{card.desc}</p>
//               <img
//                 src={card.icon}
//                 alt={card.name}
//                 className="h-12 w-12 rounded-full"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;

// import React from "react";

// function GlowingIcons() {
//   return (
    
//       <div class="icons">
//         <a href="" style="--color:#1877F2;">
//           {" "}
//           <i class="fa-brands fa-facebook"></i>
//         </a>
//         <a href="" style="--color:#f56040;">
//           <i class="fa-brands fa-instagram"></i>
//         </a>
//         <a href="" style="--color: #1DA1F2;">
//           <i class="fa-brands fa-twitter"></i>
//         </a>
//         <a href="" style="--color:#ee1d52;">
//           <i class="fa-brands fa-tiktok"></i>
//         </a>
//         <a href="" style="--color:#25d366;">
//           <i class="fa-brands fa-whatsapp"></i>
//         </a>
//       </div>
//   );
// }

// export default GlowingIcons;
