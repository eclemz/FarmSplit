import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// options: [{ value, label }]
export default function CustomDropdown({ options, value, onChange, className = "", buttonLabel }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center flex-1 w-full bg-white px-4 pt-2 pb-1 gap-2 text-left focus:outline-none"
      >
        <span className='flex items-center gap-2 text-xs font-bold text-[#686868]'>
          {buttonLabel}
        </span>
        <FaChevronDown className={`gap-2 h-4 w-4 text-[#686868] ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <ul className="absolute flex flex-col z-10 mt-2 w-full justify-center bg-white gap-4">
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`flex items-center gap-2 text-sm font-bold px-4 py-2 cursor-pointer text-[#424242] ${
                opt.value === value ? "bg-[#f3f4f6] font-bold" : ""
              }`}
            >
              {idx === 0 ? "All" : opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}