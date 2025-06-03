import { useState, useRef } from "react";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import HamburgerMenu from "./HamburgerMenu";
import SlidingSearch from "./SliddingSearch";
import { Typewriter } from "react-simple-typewriter";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import { useSearch } from "../Contexts/SearchContext";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [query, setQuery] = useState("");
   const { setSearchQuery } = useSearch();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Array of placeholder texts
  const placeholders = [
    "Search for Poultry products...",
    "Search for fresh vegetables...",
    "Search for organic fruits...",
    "Search for farm produce...",
  ];

  const handleFocus = () => setIsInputFocused(true);
   
  const handleBlur = (e) => {
    if (query) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 0);
    } else {
      setIsInputFocused(false); 
    }
  };

   const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (query.trim() !== "") {
      setSearchQuery(query);
      setQuery("");
      navigate("/marketplace");
    }
    inputRef.current.blur();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  const handleInputClear = (e) => {
    setQuery("");
    if (inputRef.current) inputRef.current.focus();
    if (e) e.preventDefault();
   setSearchQuery("");
  };

  const handleClose = () => setIsVisible(false);
   const { getCartCount } = useCart();
  const count = getCartCount();
  
 
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

      <main className="dashboard w-full bg-white flex flex-col justify-center self-stretch items-center lg:py-4 lg:px-16 lt:px-7 md:py-4 md:px-8 py-4 px-5 gap-4">
        <div className="flex lg:items-center md:items-end items-center gap-1">
          <a href="/">
            <img
              src="/Images/Logo.svg"
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
          <HamburgerMenu />
          <form className="hidden relative w-full gap-5 md:py-1 md:px-1 md:flex lg:flex lg:justify-center md:justify-center  items-center border border-gray-400 lg:rounded-xl md:rounded-lg shadow-sm hover:border-orange-600 hover:shadow-orange-600 bg-white focus-within:bg-white focus-within:border-orange-700 focus-within:shadow-sm focus-within:shadow-orange-700 flex-1 cursor-pointer"
          onSubmit={handleSearch}
            role="search">
            {!isInputFocused && !query && (
              <div
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none select-none
                  lg:text-base md:text-[0.875rem] text-xs"
                style={{ zIndex: 1 }}
              >
                <Typewriter
                  words={placeholders}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </div>
            )}
            <input
              ref={inputRef}
              id="searchInput"
              type="text"
              placeholder=''
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="lg:pl-2 lg:gap-5 flex-1 text-gray-800 focus:outline-none lg:text-base md:text-[0.875rem] font-normal focus:bg-white pr-8"
              aria-label="Search for products"
              style={{ zIndex: 2, background: "transparent" }}
            />

            {(isInputFocused || query) && query && (
              <button
                type="button"
                className=" flex h-4 w-4 justify-center items-center bg-gray-400 rounded-full text-gray-100 focus:outline-none z-10"
                tabIndex={-1}
                aria-label="Clear search"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleInputClear}
              >
                <IoIosClose className="flex self-center justify-center h-4 w-4" />
              </button>
            )}

            <button
              className="flex py-2 px-4 justify-center items-center bg-[#FF6F61] hover:bg-[#E86558] active:bg-[#B54F45] gap-2 rounded-lg"
              onClick={handleSearch}
              type="submit"
              aria-label="Submit Search"
            >
              <IoSearch className="bx bx-search w-6 h-6 text-white self-center items-center justify-center flex lg:gap-[0.625rem] md:gap-[0.625rem] gap-[0.52rem]" />
            </button>
          </form>

          <div className="flex gap-4 items-center">
            {/* Mobile Search */}
            <SlidingSearch className="md:hidden block" />
            {/* Cart Icon with Count */}
            <div className="relative group">
              <button aria-label="View Cart" className=" w-10 h-10 relative flex items-center justify-center"
              type="button">
                <MdOutlineShoppingCart className=" justify-center h-6 w-6 text-gray-600 cursor-pointer shrink-0" />
                {count > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[0.625rem] rounded-full h-4 w-4 flex items-center justify-center"
          >
            {count}
          </span>
          )}
            </button>
            <div className="absolute right-0 mt-0 z-50 w-80 hidden group-hover:block min-w-80">
            <Cart />
          </div>
          </div>
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
