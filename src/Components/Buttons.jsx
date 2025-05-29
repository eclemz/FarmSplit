import React from "react";

// Orange Primary button 
function Buttons({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#FF6F61] lg:hover:scale-105 active:font-bold transition-all duration-200 lg:hover:bg-[#E86558] active:bg-[#B54F45] rounded-lg ${className} `}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}


// Orange Secondary button 
function Buttons1({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-[#FF6F61] bg-inherit border border-[#FF6F61] lg:hover:scale-105 active:font-bold transition-all duration-200 lg:hover:border-[#E86558]  active:border-[#B54F45] active:text-[#B54F45] active:border-[2px] rounded-lg ${className}`} 
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}


// Green Primary button
function Buttons2({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#09AF54] active:font-bold transition-all duration-200 md:hover:bg-[#089F4C] active:bg-[#067C3C] rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}


// Green Secondary button
function Buttons3({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs border border-[#09AF54] text-[#09AF54] bg-inherit active:scale-105 lg:hover:border-[#089F4C] active:border-[#067C3C] active:text-[#067C3C] lg:hover:bg-[#FAFAFA] active:bg-[#FAFAFA] active:font-bold active:border-double hover:animate-bou transition-all duration-200 lg:hover:scale-105 rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}



//Red Primary button
function Buttons4({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-white bg-[#E40101] lg:hover:scale-105 active:font-bold md:hover:bg-[#CF0101] active:bg-[#A20101] rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}

//Red Secondary button
function Buttons5({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold md:py-2 md:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-[#E40101] border border-[#E40101] bg-inherit lg:hover:scale-105 active:font-bold transition-all duration-200  lg:hover:border-[#CF0101] active:border-[#A20101] lg:hover:border-[2px] active:border-[2px] rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}

// Orange Tetiary button
function Buttons6({children, icon, className, onClick}) {
  return (
    <button className={`flex justify-center items-center md:font-normal font-bold md:py-2 md:px-4 py-[0.625rem] px-2 md:p-2 gap-2 lg:text-base md:text-sm text-xs text-[#FF6F61] bg-inherit md:hover:text-[#E86558] md:active:font-bold  md:hover:bg-[#FAFAFA] active:bg-[#FAFAFA] active:text-[#B54F45] md:hover:underline md:active:underline rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}

//Red Tetiary button
function Buttons7({children, icon, className, onClick}) {
  return (
    <button className={`inline justify-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 text-[#E40101]  bg-inherit md:hover:font-bold md:active:font-bold md:hover:bg-[#FAFAFA] md:active:bg-[#FAFAFA]   md:hover:text-[#CF0101] md:active:text-[#A20101] md:hover:text-underline md:active:text-underline rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}
//Green Tetiary button
function Buttons8({children, icon, className, onClick}) {
  return (
    <button className={`inline justify-center lg:py-2 lg:px-4 py-[0.625rem] px-2 md:p-2 gap-2 text-[#09AF54]  bg-inherit md:hover:font-bold md:active:font-bold md:hover:bg-[#FAFAFA] md:active:bg-[#FAFAFA]   md:hover:text-[#089F4C] md:active:text-[#067C3C] md:hover:text-underline md:active:text-underline rounded-lg ${className}`}
    onClick={onClick}
    >
      {children}{icon}
    </button>
  );
}
export {Buttons, Buttons1, Buttons2, Buttons3, Buttons4, Buttons5, Buttons6, Buttons7, Buttons8};
