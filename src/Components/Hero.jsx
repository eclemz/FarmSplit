import Carousel from "./Carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Buttons } from "./Buttons";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center lg:gap-10 md:gap-10 gap-4 lg:py-10 lg:px-14 lt:px-8 lt:py-14 md:py-14 md:px-8 py-14 px-5 self-stretch relative">
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/Images/image23.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <header
        className="relative z-10 gap-8 items-center flex-col flex self-stretch"
        aria-label="Hero Content"
      >
        <div className="gap-4 items-center flex-col flex">
        <div className="self-stretch items-center flex-col flex">
          <h1 className="lg:text-5xl md:text-[2.5rem] text-[1.75rem] font-bold lg:leading-[57.6px] md:leading-[57.6px] leading-[2.1rem] text-black lg:self-center md:self-center self-stretch font-sans">
            Your One Stop Shop For
          </h1>
          <h1 className="lg:text-5xl md:text-[2.5rem] text-[1.75rem] font-bold lg:leading-[3.6rem] md:leading-[3.6rem] leading-[2.1rem] text-[#09AF54] lg:self-center md:self-center self-stretch font-sans underline decoration-[8.5%] underline-offset-[15%] decoration-wavy">
            Fresh and Home Grown
          </h1>

          <h1 className="lg:text-5xl md:text-[2.5rem] text-[1.75rem] font-bold lg:leading-[57.6px] md:leading-[57.6px] leading-[2.1rem] text-black lg:self-center md:self-center self-stretch font-sans lg:pt-0 md:pt-0 pt-1">
            Farm Produce
          </h1>
        </div>
        <p className="lg:text-center md:self-center self-stretch lg:text-xl md:text-lg text-base font-normal">
          Shop your organic foodstuffs and farm produce <br />
          from the comfort of your home and have them delivered to your
          doorsteps.
        </p>
        </div>
        <Link to="/marketplace" className="">
        <Buttons className="group lg:self-center md:self-center self-stretch">
           <span className="group-active:font-bold md:font-normal transition-all duration-150">Shop Foodstuff</span>
      <MdKeyboardArrowRight
        className="hidden md:flex flex-col justify-center items-center gap-[0.625rem] transition-all duration-150 group-active:scale-150"
        aria-hidden="true"
      />
      <MdArrowForward className="md:hidden flex flex-col w-4 h-4 justify-center items-center gap-[0.417rem]" />
        </Buttons>
        </Link>
      </header>
      {/* Carousel Section */}
      <section
        className="w-full rounded-lg gap-4 self-stretch lg:mx-auto overflow-hidden"
        aria-label="Product Carousel"
      >
        <Carousel />
      </section>
    </section>
  );
};

export default Hero;
