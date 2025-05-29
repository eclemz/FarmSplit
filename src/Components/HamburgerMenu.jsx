import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

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
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
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
        className={`fixed flex flex-col top-0 left-0 h-screen lg:w-[20rem] md:w-[20rem] lt:w-[20rem] w-[16.313rem]  pt-4 pr-4 bg-[#FFF1EF] text-[#424242] transform transition-transform duration-300 border-r-2 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          <button
            className=" justify-center self-end items-center bg-inherit text-gray-600 cursor-pointer focus:outline-none"
            onClick={toggleMenu}
          >
            <RiCloseLine className="h-5 w-5"/>
          </button>

        <div className="flex flex-col lg:w-[20rem]  md:w-[20rem] lt:w-[20rem] w-[16.313rem] md:py-14 lg:px-8 px-4 lg:gap-8 gap-5">
            
            <Buttons className={`md:hidden block mt-8 self-stretch !text-xs !font-bold`}>Register / Login</Buttons>

          <ul className="menulist flex flex-col justify-center items-start gap-4 self-stretch">
            <li >
              <Link to="/" className="flex w-full" onClick={handleLinkClick}>
               <span className="flex lg:text-sm text-xs font-bold text-left">Home</span> 
              </Link>
            </li>
            <li>
             <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left">About Us</span> 
              </Link>
            </li>
            <li>
              <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left">Services</span> 
              </Link>
            </li>
            <li>
              <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left">Join a Group</span> 
              </Link>
            </li>
          </ul>

          <ul className="menulist flex flex-col justify-center items-start gap-4 self-stretch">
            <li>
              <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left ">FAQs</span> 
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="flex w-full" onClick={handleLinkClick}>
               <span className="flex lg:text-sm text-xs font-bold text-left ">Products</span> 
              </Link>
            </li>
            <li>
              <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left ">Services</span> 
              </Link>
            </li>
            <li>
              <Link to="#" className="flex w-full">
               <span className="flex lg:text-sm text-xs font-bold text-left ">Contact</span> 
              </Link>
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
