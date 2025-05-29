import React from "react";
import { Buttons1 } from "../Components/Buttons";

function Subscription() {
  return (
    <section className="flex flex-col items-center self-stretch gap-8 lg:py-14 lg:px-60 lt:py-[5.188rem] lt:px-14 md:py-14 md:px-20 py-14 px-5 bg-[#FAFAFA] ">
      <div className="flex items-center self-stretch justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex p-2 justify-center items-center gap-2 rounded-lg bg-[#FFF1EF]">
            <h2 className="lg:text-sm md:text-xs text-[0.625rem] font-bold text-[#FF6F61]">
              JOIN OUR MAILING LIST
            </h2>
          </div>
          <h3 className="text-center lg:text-[2rem] md:text-[1.75rem] text-xl md:self-center self-stretch lg:leading-[3rem] md:leading-[2.4rem]">
            Join our Mailing List to get on-time <br /> updates and promo sales.
          </h3>
        </div>
      </div>
      <form
        action="subscribe"
        method="POST"
        className="flex md:flex-row flex-col md:items-center items-start md:justify-normal justify-center self-stretch md:gap-5 gap-2 py-2 px-2 lg:px-2 md:px-4 border-[0.5px] border-gray-400 rounded-lg  hover:border-orange-600 hover:shadow-orange-600 focus-within:bg-white focus-within:border-orange-700 focus-within:shadow-sm focus-within:shadow-orange-700 cursor-pointer"
      >
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          aria-label="Enter your email address"
          className=" text-[#C4C4C4] md:text-base text-xs  focus:outline-none flex-1 bg-inherit"
        />
        <Buttons1 className={"md:self-end self-stretch"} type="submit">
          Subscribe Now
        </Buttons1>
      </form>
    </section>
  );
}

export default Subscription;
