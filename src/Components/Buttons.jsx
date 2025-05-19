import React from "react";

function Buttons({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#FF6F61] md:hover:font-bold md:active:font-bold md:hover:bg-[#E86558] md:active:bg-[#B54F45] rounded-lg ${className} `}
    >
      {children}{icon}
    </button>
  );
}
function Buttons1({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-[#FF6F61] bg-white md:hover:font-bold md:active:font-bold md:hover:border-[#E86558] md:hover:bg-[#FAFAFA] md:active:border-[#B54F45] md:active:text-[#B54F45] rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}


function Buttons2({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#09AF54] md:hover:font-bold md:active:font-bold md:hover:bg-[#089F4C] md:active:bg-[#067C3C] rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}

function Buttons3({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs border-[2px] border-[#09AF54] text-[#09AF54] bg-white md:hover:font-bold md:active:font-bold md:hover:border-[#089F4C] md:hover:bg-[#E6F7EE] md:active:border-[#067C3C] md:active:text-[#067C3C] md:active:bg-[#E6F7EE] rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}

function Buttons4({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#E40101] md:hover:font-bold md:active:font-bold md:hover:bg-[#CF0101] md:active:bg-[#A20101] rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}

function Buttons5({children, icon, className}) {
  return (
    <button className={`flex justify-center items-center  lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-[#E40101] bg-white md:hover:font-bold md:active:font-bold md:hover:border-[#CF0101] md:active:border-[#A20101] rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}

function Buttons6({children, icon, className}) {
  return (
    <button className={`inline justify-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2  bg-inherit md:hover:font-bold md:active:font-bold rounded-lg ${className}`}
    >
      {children}{icon}
    </button>
  );
}
export {Buttons, Buttons1, Buttons2, Buttons3, Buttons4, Buttons5, Buttons6};
