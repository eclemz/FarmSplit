import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

function SlidingSearch({ onSearch }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);

  // Click outside to close handler
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        // Only close if there is NO text in the input
        if (!query) {
          setOpen(false);
          setQuery("");
        } else {
          // If there is text, keep focus
          if (inputRef.current) inputRef.current.focus();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, query]);

  //autofocus input when open
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Handle search event (button click or Enter)
  const handleSearch = () => {
    if (query.trim() !== "") {
      if (onSearch) {
        onSearch(query);
      } else {
        // Default: alert for demo purposes
        alert("Searching for: " + query);
      }
    }
  };

  const handleButtonClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      handleSearch();
    }
  };

  const handleInputClear = (e) => {
    setQuery("");
    if (inputRef.current) inputRef.current.focus();
    if (e) e.preventDefault();
  };

  // Pressing Enter also triggers search
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && open) {
      handleSearch();
    }
  };

  return (
    <div className="md:hidden flex items-center relative" ref={containerRef}>
      {/* Search input and button group wrapper */}
      <div
        className={`
          flex items-center
          ${open ? "bg-white border border-[#B54F45] rounded-md p-1" : ""}
          ${
            open
              ? "w-[15rem] absolute right-0 top-1/2 -translate-y-1/2 z-20 shadow-sm shadow-[#B54F45]"
              : ""
          }
        `}
      >
        {/* Slide-in Input */}
        <input
          ref={inputRef}
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`
             bg-transparent outline-none
            px-1 text-xs w-0 opacity-0
            ${open ? "w-[15rem] opacity-100" : ""}
          `}
        />

        {(isInputFocused || query) && query && (
          <button
            type="button"
            className=" flex h-3 w-3 m-1 justify-center items-center bg-gray-400 rounded-full text-gray-100 focus:outline-none z-10"
            tabIndex={-1}
            aria-label="Clear search"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleInputClear}
          >
            <IoIosClose className="flex self-center justify-center h-4 w-4" />
          </button>
        )}
        {/* Search Button */}
        <button
          className={`
            flex justify-center items-center p-1 focus:bg-[#B54F45]
            ${open ? "bg-[#FF6F61] rounded-md" : ""}
          `}
          onClick={handleButtonClick}
          aria-label="Open search"
          type="button"
        >
          <IoSearch
            className={`
            ${open ? "text-white w-4 h-4" : "text-gray-600 w-6 h-6"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default SlidingSearch;
