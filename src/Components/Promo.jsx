import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Buttons } from "./Buttons";

function Promo() {
  const controls = useAnimation();
  // Detects when the component is in view
  const [ref, inView] = useInView({
    threshold: 0.1, // 10% of the element is visible
  });
  // Start animation when the element comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }, // Start hidden behind the section
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }, // Fully visible, pushed up
  };

  return (
    <div>
      <section className="flex md:flex-col items-start self-stretch gap-16 lg:py-14 lg:px-24 md:py-14 md:px-8 py-8 px-5 relative overflow-hidden  bg-[#E6F7EE]">
        <div className="flex flex-1 md:flex-row flex-col md:items-center items-start md:justify-normal justify-center md:gap-8 gap-4 self-stretch bg-[#B3E6CA] lg:p-10 md:py-10 md:px-4 py-4 px-2 relative overflow-hidden rounded-2xl">
          <img
            src="/Images/chicken2.png"
            alt=""
            className="hidden md:block lg:w-[18.75rem] lg:h-[18.75rem] md:w-[10.3125rem] md:h-[10.3125rem] aspect-square "
          />
          <div className="md:hidden flex justify-between items-start self-stretch">
            <img
              src="/Images/chicken2.png"
              alt=""
              className=" w-[10.125rem] h-[10.125rem] aspect-square "
            />
            <img
              src="/Images/chicken1.png"
              alt="Juicy fresh chicken with Easter discount offer"
              className=" w-[10.125rem] h-[10.125rem] aspect-square"
            />
          </div>
          <div className="flex flex-col items-center flex-1 md:gap-8 gap-4 md:self-auto self-stretch">
            <div className="flex flex-col md:justify-normal justify-center md:items-center items-start self-stretch md:gap-4 gap-2">
              <div className="flex flex-col md:justify-normal justify-center md:items-center items-start md:gap-2 gap-1 md:self-auto self-stretch">
                <div className="flex bg-[#FFF1EF] p-2 gap-2 justify-center items-center rounded-lg">
                  <h2 className="lg:text-sm md:text-xs text-[0.625rem] font-bold text-[#FF6F61]">
                    CATEGORIES
                  </h2>
                </div>
                <motion.div
                  ref={ref} // Ties the motion.div to the in-view hook
                  initial="hidden" // Initial state
                  animate={controls} // Animation controls
                  variants={variants} // Animation variants
                  transition={{ duration: 1, ease: "easeOut" }} // Animation duration
                  className="text-center hidden md:block"
                >
                  <h3 className="lg:text-[2.5rem] md:text-[2rem] font-bold text-[#424242] ">
                    Easter Deals!!!
                  </h3>
                </motion.div>

                {/* for mobile */}
                <h3 className="lg:hidden md:block text-[1.73rem] font-bold text-[#424242] ">
                  Easter Deals!!!
                </h3>
              </div>

              <p className="lg:text-xl md:text-base text-sm md:text-center md:leading-5 self-stretch text-[#424242]">
                Check out our Easter Chicken Deals! Grab tasty discounts on
                premium chicken for your holiday meals. We've got awesome offers
                you won't want to miss!
              </p>
            </div>
            <Buttons className={`self-stretch`}>Order Now</Buttons>
          </div>

          <img
            src="/Images/chicken1.png"
            alt="Juicy fresh chicken with Easter discount offer"
            className="hidden md:block  lg:w-[18.75rem] lg:h-[18.75rem] md:w-[10.3125rem] md:h-[10.3125rem] aspect-square"
          />
        </div>
      </section>
    </div>
  );
}

export default Promo;
