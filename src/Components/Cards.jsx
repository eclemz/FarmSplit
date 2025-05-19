import React from "react";
import { Buttons } from "./Buttons";

function Cards({ data }) {
  return (
    <section className="cards-section">
      <header className="categories flex flex-col md:gap-16 lg:gap-16 items-start self-stretch bg-white lg:py-14 lg:px-24 md:py-14 md:px-8 py-8 px-5">
        <div className="flex lg:flex-row md:flex-col flex-col lg:justify-normal md:justify-center lg:items-center md:items-start items-start lg:self-stretch lg:gap-[23.125rem] md:gap-8 gap-4">
          <div className="flex flex-col items-start lg:self-stretch gap-[0.9375rem]">
            <div
              className="flex bg-[#E6F7EE] p-2 gap-2 justify-center items-center rounded-lg"
              aria-hidden="true"
            >
              <h2 className="lg:text-sm md:text-[0.75rem] text-[0.625rem] font-bold text-[#09AF54]">
                CATEGORIES
              </h2>
            </div>
            <h3 className="w-[24.5rem] lg:text-[2rem] md:text-[1.75rem] text-2xl text-[#424242] font-bold ">
              What you will find <br />
              on our shelf
            </h3>
          </div>
          <p className="lg:text-xl md:text-lg text-sm text-[#424242] lg:flex-1 md-self-stretch">
            Shop your organic foodstuffs and farm produce <br /> from the
            comfort of your home and have them delivered to your doorsteps.
          </p>
        </div>
      </header>

      <div
        className="hidden lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 items-start self-stretch gap-8 lg:pb-14 lg:px-24 md:pb-16 md:px-8"
        role="list"
        aria-label="Available categories on our shelf"
      >
        {data.map((card, index) => (
          <article
            key={index}
            className={`relative h-[12.6626rem] flex flex-1 lg:p-4 lg:gap-8 md:gap-4 md:p-4 items-end overflow-hidden ${card.background} rounded-2xl`}
            role="listitem"
          >
            <img
              className=" w-[10.625rem] h-[10.625rem] absolute bottom-[-5%] right-[-5%] md:bottom-[-5%] md:right-[-10%]"
              src={card.image}
              alt="Category image"
            ></img>

            <div className="flex flex-col w-[14.857rem] items-start gap-4">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-2xl text-[#424242] font-bold ">
                  {card.title}
                </h2>
                <p className="lg:text-base md:text-sm text-[#424242] font-normal self-stretch">
                  {card.text}
                </p>
              </div>

              <Buttons>Start Shopping</Buttons>
            </div>
          </article>
        ))}
      </div>

      {/* for mobile */}
      <div
        className=" md:hidden flex flex-col items-start self-stretch gap-8 py-4 px-5"
        role="list"
        aria-label="Available categories on our shelf"
      >
        {data.map((card, index) => (
          <article
            key={index}
            className={`relative w-full flex border h-[202px] py-4 px-2 items-end gap-4 ${card.background} rounded-2xl`}
            role="listitem"
          >
            <img
              className="h-[4.25rem] w-[4.25rem] absolute left-[0.594rem] top-[0.563rem] pb-4"
              src={card.image}
              alt="Category image"
            ></img>

            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-xl text-[#424242] font-bold self-stretch">
                  {card.title}
                </h2>
                <p className="text-[0.75rem] text-[#424242] font-normal self-stretch">
                  {card.text}
                </p>
              </div>

              <Buttons className={`self-stretch`}>Start Shopping</Buttons>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cards;
