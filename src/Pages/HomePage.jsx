import React from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Promo from "../Components/Promo";
import Groups from "../Components/Groups";
import Testimonial from "../Components/Testimonial";
import FaqSection from "../Components/FaqSection";
import Subscription from "../Components/Subscription";
import Shelf from "../Components/Shelf";
import { useSearch } from "../Contexts/SearchContext";
import {
  cardData1,
  cardData3,
  cardData4,
  faqs,
  products,
} from "../data/cardData";

function Home() {
  const { searchQuery } = useSearch();
  return (
    <>
      <Hero />
      <Cards data={cardData1} />
      <div className="flex flex-col">
        <div className="order-2 md:order-1">
          <Promo />
        </div>
        <div className="order-1 md:order-2">
          <Groups data={cardData3} />
        </div>
      </div>
      <Shelf data={products} className=""/>
      <Testimonial data={cardData4} />
      <FaqSection data={faqs} />
      <Subscription />
    </>
  );
}

export default Home;