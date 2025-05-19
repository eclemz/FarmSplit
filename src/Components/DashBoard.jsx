import React, { useState, useEffect } from "react";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";

const DashBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true); // For blinking cursor
  const [isTypingActive, setIsTypingActive] = useState(true); // For controlling animation

  // Array of placeholder texts
  const placeholders = [
    "Search for Poultry products...",
    "Search for fresh vegetables...",
    "Search for organic fruits...",
    "Search for farm produce...",
  ];

  useEffect(() => {
    if (!isTypingActive) return; // Stop typing if the user clicks the input

    let textIndex = 0; // Index for the array of placeholders
    let charIndex = 0; // Index for the characters in the current placeholder
    let typingTimer;

    const typeWriterEffect = () => {
      if (charIndex < placeholders[textIndex].length) {
        // Typing phase: Add one character at a time
        setCurrentText((prev) =>
          placeholders[textIndex].slice(0, charIndex + 1)
        );
        charIndex++;
        typingTimer = setTimeout(typeWriterEffect, 80); // Typing speed
      } else {
        // Deleting phase: Remove one character at a time after a pause
        setTimeout(() => {
          const deleteEffect = () => {
            if (charIndex > 0) {
              setCurrentText((prev) => prev.slice(0, charIndex - 1)); // Remove one character
              charIndex--;
              typingTimer = setTimeout(deleteEffect, 30); // Deleting speed
            } else {
              // Move to the next placeholder after deleting is complete
              textIndex = (textIndex + 1) % placeholders.length; // Loop through the placeholders
              typeWriterEffect(); // Start typing the next placeholder
            }
          };
          deleteEffect();
        }, 2000); // Pause before starting deletion
      }
    };

    typeWriterEffect();

    return () => {
      clearTimeout(typingTimer); // Clear timer on component unmount
    };
  }, [isTypingActive]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorBlinkingTimer = setInterval(() => {
      setIsCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 500); // Cursor blink speed

    return () => clearInterval(cursorBlinkingTimer); // Clear blinking timer on component unmount
  }, []);

  const handleFocus = () => {
    setCurrentText(""); // Clear the placeholder text when the input is clicked
    setIsTypingActive(false); // Stop the typing animation
  };

  const handleBlur = () => {
    setIsTypingActive(true); // Resume the typing animation when clicking outside
  };

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <header className="sticky-dashboard">
      <div
        className={`w-full h-10 flex justify-between items-center bg-[#067C3C] text-white relative ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <div className="marquee overflow-clip whitespace-nowrap fadeout-horizontal">
          <div className="marquee-text-track lg:text-sm md:text-[0.75rem] text-[0.625rem]">
            <p aria-hidden="true">
              Free delivery on all orders over 100,000 Naira.
            </p>
            <p aria-hidden="true">PROMO!!! PROMO!!! PROMO!!!</p>
            <p aria-hidden="true">Our Easter promo is still on.</p>
            <p aria-hidden="true">
              Get 20% off on all orders above 50,000 Naira.
            </p>
          </div>
        </div>
        {isVisible && (
          <button
            className="text-white text-xl ml-4 pr-4 absolute right-0 focus:outline-none"
            onClick={handleClose}
          >
            x
          </button>
        )}
      </div>

      <main className="dashboard w-full bg-[#FFF1EF] flex flex-col justify-center self-stretch items-center lg:py-4 lg:px-24 md:py-4 md:px-8 py-4 px-5 gap-4">
        <div className="flex lg:items-center md:items-end items-center gap-1">
          <a href="/">
            <img
              src="./Images/Logo.svg"
              alt="Farm to Table Logo"
              className="lg:h-10 lg:w-10 md:h-8 md:w-8 w-6 h-6 aspect-square"
            />
          </a>
          <p className="lg:text-[2rem] md:text-[1.75rem] text-2xl text-[#09AF54] font-bold ">
            Farm to table
          </p>
        </div>
        <nav
          className="flex lg:flex-row gap-14 lg:justify-center md:justify-center justify-between items-center self-stretch"
          aria-label="Main Navigation"
        >
          
          <HamburgerMenu/>
          <div className="w-full gap-5 md:py-2 md:px-2 md:flex lg:flex lg:justify-center md:justify-center  items-center border border-gray-400 lg:rounded-xl md:rounded-lg shadow-sm hover:border-orange-600 hover:shadow-orange-600 bg-[#FFF1EF] focus-within:bg-white focus-within:border-orange-700 focus-within:shadow-md focus-within:shadow-orange-700 flex-1 cursor-pointer hidden">
            <input
              id="searchInput"
              type="text"
              placeholder={`${currentText}${isCursorVisible ? "|" : ""}`} // Add blinking cursor
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleFocus} // Clear placeholder on focus
              onBlur={handleBlur} // Resume placeholder animation on blur
              className="lg:pl-2 lg:gap-5 flex-1 text-gray-800 focus:outline-none lg:text-base md:text-[0.875rem] font-normal focus:bg-white bg-[#FFF1EF] "
              aria-label="Search for products"
            />
            {/* <div className="rounded-xl py-1 px-1"> */}
            <button
              className="flex py-2 px-4 justify-center items-center bg-[#FF6F61] hover:bg-[#E86558] active:bg-[#B54F45] gap-2 rounded-lg"
              onClick={handleSearch}
              type="submit"
              aria-label="Submit Search"
            >
              <IoSearch className="bx bx-search w-6 h-6 text-white self-center items-center justify-center flex lg:gap-[0.625rem] md:gap-[0.625rem] gap-[0.52rem]" />
            </button>
            {/* </div> */}
          </div>

          <div className="flex gap-4 items-center">
            <button className="lg:hidden md:hidden flex justify-center items-center p-2 gap-2">
              <IoSearch className="flex w-6 h-6 text-gray-600 justify-center items-center gap-[0.52rem]" />
            </button>

            <button aria-label="View Cart" className="w-10 h-10 ">
              <MdOutlineShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer shrink-0" />
            </button>
            <div className="hidden md:flex lg:flex justify-center items-center p-1 rounded-full bg-white">
              <button
                className=" items-center w-10 h-10 p-2 gap-2 rounded-full justify-center flex  bg-[#FF6F61] hover:bg-[#E86558] active:bg-[#B54F45]"
                aria-label="View Profile"
              >
                <LuUserRound className=" w-6 h-6 flex justify-center items-center cursor-pointer text-white gap-[0.6rem] shrink-0 rounded-full" />
              </button>
            </div>
          </div>
        </nav>
      </main>
    </header>
  );
};

export default DashBoard;
