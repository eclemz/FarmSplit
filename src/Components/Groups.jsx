
import React from "react";
import {Buttons3} from "./Buttons.jsx";
import { FaWhatsapp } from "react-icons/fa";

function Groups({ data }) {
  // Filtering cardData3 to include either images or cards with text
  const filteredData = data.filter(
    (card) =>
      card.images ||
      (
        card.title &&
        card.text &&
        card.icon1 &&
        card.icon2 &&
        card.numb &&
        card.sub1 &&
        card.sub2 &&
        card.sub3 &&
        card.subIcon)
  );

  if (filteredData.length === 0) {
    return (
      <section
        className="groups-section flex flex-col items-center py-14 px-14"
        aria-label="Food Sharing Groups"
      >
        <h2 className="text-[32px] font-bold text-gray-700">
          No Groups Available
        </h2>
        <p className="text-gray-500">Please check back later for updates.</p>
      </section>
    );
  }

  return (
    <section
      className="flex flex-col items-start self-stretch md:gap-16 gap-8 lg:py-14 lg:px-14 lt:px-8 md:py-14 md:px-8 py-8 px-5"
      aria-label="Food Sharing Groups"
    >
      <header className="flex flex-col items-start flex-1 gap-4">
      <div className="flex p-2 justify-center rounded-lg bg-[#E6F7EE]">
      <h2 className="lg:text-sm lt:text-xs md:text-xs text-[0.625rem] font-bold  text-[#09AF54] items-enter gap-2">FOOD SHARING GROUPS</h2>
      </div>
      <span className="lg:text-[2rem] lt:text-3xl md:text-[1.75rem] leading-[120%] text-2xl text-[#424242] md:self-auto self-stretch font-bold">Join a group of people to buy and <br className="hidden md:block" /> Share foodstuffs in Bulk</span>
      </header>
      {/* Mobile Layout */}
      <div
        className="md:hidden flex flex-col gap-8"
        role="list"
        aria-label="Mobile Food Sharing Groups"
      >
        {filteredData.map((card, index) => {
          // For mobile layout, alternate sequence: image, card, image, card
          const isImage = card.images && index % 2 === 0; // Ensure images are placed alternately
          const isCard =
            card.title && card.text && card.icon1 && card.numb &&  index % 2 !== 0; // Ensure cards are placed alternately

          if (isImage) {
            return (
              <div key={index} className="flex justify-center">
                <img
                  src={card.images}
                  alt="Food Sharing Group"
                  className="w-full rounded-2xl"
                />
              </div>
            );
          }

          if (isCard) {
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 p-4 ${card.background} rounded-2xl`}
                role="listitem"
              >
                <div className="flex items-center gap-4">
                  <h4 className="text-xl font-bold text-[#424242]">
                    {card.title}
                  </h4>
                </div>
                <p className="text-sm text-[#424242]">{card.text}</p>
                <div className="flex items-center flex-1">
                <img
                    src={card.icon2}
                    alt="Group Icon"
                    className="w-6 h-6 rounded-full"
                  />
                  <img
                    src={card.icon3}
                    alt="Group Icon"
                    className="w-6 h-6 rounded-full ml-[-0.6rem]"
                  />
                  <img
                    src={card.icon1}
                    alt="Group Icon"
                    className="w-6 h-6 rounded-full ml-[-0.6rem]"
                  />
                  <img
                    src={card.icon3}
                    alt="Group Icon"
                    className="w-6 h-6 rounded-full ml-[-0.6rem]"
                  />
                  <span className="text-xs p-2">{card.numb}</span>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {card.subIcon}
                    <p className="text-sm font-medium text-[#424242]">
                      {card.sub1}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {card.subIcon}
                    <p className="text-sm font-medium text-[#424242]">
                      {card.sub2}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {card.subIcon}
                    <p className="text-sm font-medium text-[#424242]">
                      {card.sub3}
                    </p>
                  </div>
                </div>

                <Buttons3 className="self-stretch">
                 <span className="active:font-bold"> Join our Whatsapp group</span>
                  <FaWhatsapp className="w-5 h-5 text-white bg-green-400 rounded-full p-[0.125rem]" />
                </Buttons3>
              </div>
            );
          }

          return null; // Skip rendering if neither image nor card
        })}
      </div>

      {/* Desktop and Tablet Layout */}
      <div
        className="hidden md:grid md:grid-cols-2 gap-8"
        role="list"
        aria-label="Desktop Food Sharing Groups"
      >
        {filteredData.map((card, index) => (
          <article
            key={index}
            className="flex items-center md:gap-8 gap-4 self-stretch"
            role="listitem"
          >
            {card.images && (
              <img
                src={card.images}
                alt=""
                className="rounded-2xl flex-1 lg:w-[608px] lg:h-[405px] lt:h-[19.336rem] md:h-[15.375rem] lg:aspect-[608/405] lt:aspect-[29rem/19.336rem] md:aspect-[369/246]"
              />
            )}

            {card.title && card.text && card.icon1 && card.icon2 && card.numb && card.sub1 &&
              card.sub2 &&
              card.sub3 &&
              card.subIcon && (
              <div
                className={`flex flex-1 flex-col items-start md:gap-8 gap-2 self-stretch md:p-4 py-4 px-2 ${card.background} rounded-2xl`}
                aria-labelledby={`group-title-${index}`}
              >
                <div className="flex flex-col self-stretch items-start gap-2 ">
                  <div
                    className="flex py-2 px-0 items-center self-stretch md:gap-4 gap-2"
                    aria-hidden="true"
                  >
                    <h4 className="md:text-2xl text-xl text-[#424242] font-bold self-center">
                      {card.title}
                    </h4>
                  </div>
                  <p className="lg:text-base md:text-sm text-xs text-[#424242]">
                    {card.text}
                  </p>
                  <div className="flex items-center flex-1">
                  
                  <img
                      src={card.icon1}
                      alt=""
                      className="md:w-[2rem] md:h-[2rem] w-6 h-6"
                    />
                    <img
                      src={card.icon2}
                      alt=""
                      className="md:w-[2rem] md:h-[2rem] w-6 h-6 ml-[-0.7rem]"
                    />
                  <img
                      src={card.icon3}
                      alt=""
                      className="md:w-[2rem] md:h-[2rem] w-6 h-6 ml-[-0.7rem]"
                    />
                    <img
                      src={card.icon2}
                      alt=""
                      className="md:w-[2rem] md:h-[2rem] w-6 h-6 ml-[-0.7rem]"
                    />

                    <span className="lg:text-base text-xs p-2">{card.numb}</span>
                    </div>
                  <div className="flex items-center self-stretch gap-4">
                    <div className="h-6 w-6 flex justify-center items-center gap-[0.625rem]">
                      {card.subIcon}
                    </div>
                    <p className="md:text-lg text-base">{card.sub1}</p>
                  </div>
                  <div className="flex items-center self-stretch gap-4">
                    {card.subIcon}
                    <p className="md:text-lg text-base">{card.sub2}</p>
                  </div>
                  <div className="flex items-center self-stretch gap-4">
                    {card.subIcon}
                    <p className="md:text-lg text-base">{card.sub3}</p>
                  </div>
                </div>
                <Buttons3>Join our Whatsapp group
                <FaWhatsapp className="w-5 h-5 text-white bg-green-400 self-center rounded-full p-[0.125rem]" /></Buttons3>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Groups;
