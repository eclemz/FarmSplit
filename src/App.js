import React from "react";
import DashBoard from "./Components/DashBoard";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import {
  cardData1,
  cardData3,
  cardData4,
  faqs,
  footerData,
} from "./data/cardData";
import Promo from "./Components/Promo";
import Groups from "./Components/Groups.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import FaqSection from "./Components/FaqSection.jsx";
import Subscription from "./Components/Subscription.jsx";
import Footer from "./Components/Footer.jsx";
// import GlowingIcons from "./Components/Test.jsx"

function App() {
  return (
    <div className="overflow-hidden">
          <DashBoard />
        <div className="md:pt-[12rem] pt-[10rem]"> 
        <Hero />
        <Cards data={cardData1} />
        <Promo />
        <Groups data={cardData3} />
        <Testimonial data={cardData4} />
        <FaqSection data={faqs} />
        <Subscription />
        <Footer data={footerData} />
        {/* <GlowingIcons /> */}
        </div>
    </div>
  );
}

export default App;
