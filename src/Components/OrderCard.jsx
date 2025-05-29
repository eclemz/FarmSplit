import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { OrderCards } from "../data/cardData";

// bold all numbers, number ranges (e.g. 24–48), and preserve newlines and <br/>
function boldNumberRangesWithBreaks(text) {
  if (!text) return null;
  // Replace <br> or <br/> with a marker
  const replaced = text.replace(/<br\s*\/?>/gi, '[[BR]]');
  // Split by newline, literal "\n", or our marker
  return replaced
    .split(/(\r?\n|\\n|\[\[BR\]\])/)
    .flatMap((part, idx) => {
      if (part === '\n' || part === '\r\n' || part === '\\n' || part === '[[BR]]') {
        return <br key={`br-${idx}`} />;
      }
      // Bold number ranges (24–48, 48-72) or standalone numbers
      return part.split(/(\d+\s*[–-]\s*\d+|\d+)/g).map((piece, j) =>
        /^(\d+\s*[–-]\s*\d+|\d+)$/.test(piece) ? <strong key={`s-${idx}-${j}`}>{piece}</strong> : piece
      );
    });
}

function OrderCard({ icon, title, desc, open, onToggle }) {
  return (
    <div className="flex w-full flex-col justify-center items-start gap-2 self-stretch">
      <button
        className="flex items-center self-stretch gap-2 focus:outline-none"
        onClick={onToggle}
        aria-expanded={open} 
        aria-controls={`desc-${title}`}
      >
        <img src={icon} alt="" className="h-8 w-8" />
        <span className="flex py-2 gap-2 self-stretch items-center flex-1 text-base font-bold text-[#111]">{title}</span>
        <div className="flex items-center justify-center h-8 w-8 gap-1">
          <FaChevronDown
            className={`h-2 w-2 text-[#111] transition-transform shrink-0 duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <p
          id={`desc-${title}`}
          className=" items-center self-stretch text-base text-[#686868] whitespace-pre-wrap"
        >
          {boldNumberRangesWithBreaks(desc)}
        </p>
      )}
    </div>
  );
}

export default function OrderCardList() {
  const [openIdx, setOpenIdx] = useState(null);
  const [orderCards, setOrderCards] = useState([]);

  useEffect(() => {
    setOrderCards(OrderCards);
  }, []);

  return (
    <section className="flex w-full flex-col justify-center items-start gap-2 self-stretch">
      {orderCards.map((card, idx) => (
        <div key={card.title} className="w-full">
          <OrderCard
            {...card}
            open={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
          {idx < orderCards.length - 1 && (
            <hr className="w-full border-t border-[#C4C4C4] my-2" />
          )}
        </div>
      ))}
    </section>
  );
}