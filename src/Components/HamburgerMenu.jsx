import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { Buttons6 } from "./Buttons";
import { Buttons } from "./Buttons";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling
      }
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="flex justify-center items-center p-1 gap-1 bg-inherit text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="h-6 w-6 font-bold shrink-0" />
      </button>

      <div
        className={`fixed flex flex-col top-0 left-0 h-screen pt-4 pr-4 bg-[#FFF1EF] text-[#424242] transform transition-transform duration-300 border-r-2 rounded-r-2xl z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          <button
            className=" justify-center self-end items-center bg-inherit text-gray-600 cursor-pointer focus:outline-none"
            onClick={toggleMenu}
          >
            <RiCloseLine className="h-5 w-5"/>
          </button>

        <div className="flex flex-col w-[20rem]  md:py-14 lg:px-8 px-4 lg:gap-8 gap-5">
            
            <Buttons className={`md:hidden block mt-8 self-stretch !text-base !font-bold`}>Register / Login</Buttons>

          <ul className="menulist flex flex-col justify-center items-start gap-4 self-stretch">
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Home
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                About Us
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Services
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Contact
              </Buttons6>
            </li>
          </ul>

          <ul className="menulist flex flex-col justify-center items-start gap-4 self-stretch">
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                FAQs
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Products
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Services
              </Buttons6>
            </li>
            <li>
              <Buttons6 className="lg:text-sm text-base font-bold text-[#424242] hover:bg-gray-400 hover:bg-opacity-20 text-left w-full">
                Contact
              </Buttons6>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed left-0 top-0 h-screen w-full bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default HamburgerMenu;
