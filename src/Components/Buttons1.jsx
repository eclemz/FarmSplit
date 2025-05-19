import React, { useEffect } from 'react';

function Buttons1({text, icon, buttonClassName="", iconClassName=" "}) {
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        const ripples = document.createElement('span');
        ripples.className =
          `left-[${x}px] top-[${y}px]` +
          ' absolute bg-red-100 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 animate-ripple pointer-events-none';
        this.appendChild(ripples);
        setTimeout(() => ripples.remove(), 1000);
      });
    });

    // Cleanup event listeners
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
      <div className="">
        <button className={`relative overflow-hidden rounded-lg shadow-md shadow-gray-400/50  py-3 px-5 text-lg font-medium tracking-wider text-gray-50 z-10 ${buttonClassName}`}>
        {text}
        {icon && <i className={`bx ${icon} ${iconClassName}`}></i>} 
        </button>
    </div>
  );
}

export default Buttons1;

