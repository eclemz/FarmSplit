
function Cards({ data }) {

  return (
    <section className="cards-section">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col py-8 px-5 items-start self-stretch bg-[#FAFAFA] gap-8">
        <header className="flex flex-col justify-center items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex justify-center items-center p-2 gap-2 bg-text[#E6F7EE] rounded-lg">
              <h2 className="text-[0.625rem] font-bold leading-[150%] text-[#09AF54] ">
                CATEGORIES
              </h2>
              </div>
              <h3 className=" text-2xl font-bold leading-[120%]">
                What you will find <br /> on our shelf
              </h3>
            </div>
            
          
          <p className="lg:text-xl md:text-lg text-sm text-[#424242] lg:flex-1 md-self-stretch">
                Shop your organic foodstuffs and farm produce <br /> from the
                comfort of your home and have them <br /> delivered to your doorsteps.
              </p>
        </header>
        <div
          className=" md:hidden grid grid-cols-3 items-start self-stretch gap-8 p"
          role="list"
          aria-label="Available categories on our shelf"
        >
          {data.map((card, index) => (
            <article
              key={index}
              className={`relative flex flex-col justify-center items-center gap-4 flex-1`}
              role="listitem"
            >
              <img
                className="h-[4.25rem] w-[4.25rem]"
                src={card.image}
                alt="Category"
              ></img>

              <h2 className="text-base text-[#424242] font-bold">
                {card.title}
              </h2>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop and Tablet Layout */}
      <header className="hidden categories md:flex flex-col md:gap-16 lg:gap-16 items-start self-stretch bg-white lg:py-14 lg:px-14 lt:py-14 lt:px-8 md:py-14 md:px-8 ">
        <div className="flex lg:flex-row lt:flex-col md:flex-col flex-col lg:justify-normal lt:justify-center md:justify-center lg:items-center lt:items-start md:items-start items-start lg:self-stretch lg:gap-[23.125rem] lt:gap-8 md:gap-8 gap-4">
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
        className="hidden lg:flex lg:flex-row lt:grid lt:grid-cols-3 md:grid md:grid-cols-3 items-start self-stretch gap-8 lg:pb-14 lg:px-14 lt:py-14 lt:px-8 md:pb-16 md:px-4"
        role="list"
        aria-label="Available categories on our shelf"
      >
        {data.map((card, index) => (
          <article
            key={index}
            className={`flex flex-col flex-1 justify-center items-center gap-4`}
            role="listitem"
          >
            <img
              className=" w-[4.25rem] h-[4.25rem]"
              src={card.image}
              alt="Category"
            ></img>

                <h2 className="text-base text-[#424242] font-bold ">
                  {card.title}
                </h2>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cards;
