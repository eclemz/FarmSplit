import {useState, useEffect} from "react";
import { Buttons6 } from "./Buttons.jsx";
import ProductCard from "./ProductCard.jsx";
import { useNavigate } from "react-router-dom";


function getCols(width) {
  if (width >= 1280) return 4; // lg
  if (width >= 1024) return 3; // lt
  if (width >= 768)  return 3; // md
  return 2;                    // mobile
}

function Shelf({ data, disableLimit = false, oneRow = false, ...props }) {
    const [maxCards, setMaxCards] = useState(4);


useEffect(() => { 
    // Always keep the dependency array the same shape!
    const setCards = () => {
      const cols  = getCols(window.innerWidth);
      setMaxCards(oneRow ? cols : cols * 2);
    };
    if (!disableLimit) {
      setCards();
      window.addEventListener("resize", setCards);
      return () => window.removeEventListener("resize", setCards);
    }
    // If disableLimit is true, we don't need to set maxCards
    return undefined;
  }, [disableLimit, oneRow]);

  // If disableLimit, show all; else, show limited
  const cardsToDisplay = disableLimit ? data : data.slice(0, maxCards);
  const navigate = useNavigate();

  return (
    <section className="flex-col lg:px-16 lt:py-5 lt:px-4 md:py-8 md:px-8 py-8 px-4 items-start lg:gap-8 lt:gap-6 md:gap-6 gap-2 lt:mx-4 self-stretch">
      <ProductCard data={cardsToDisplay} />
      <Buttons6 
      className=" m-auto self-stretch active:underline md:pt-8 pt-4" 
      onClick={() => navigate("/marketplace")}>
        <span className="text-sm font-bold" >Click to shop more</span>
      </Buttons6>
    </section>
  );
}

export default Shelf;
