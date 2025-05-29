import { useState } from "react";
import clsx from "clsx";
import { RiArrowDropDownLine } from "react-icons/ri";



function FaqSection({ data }) {
  const filteredData = data.filter((faq) => faq.question || faq.answer);
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open FAQ

  const handleToggle = (index) => {
    // Close the currently open FAQ if the same index is clicked, otherwise open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section flex flex-col items-center self-stretch gap-10 lg:py-14 lg:px-44 lt:py-14 lt:px-24 md:py-14  md:px-24 py-8 px-4
    "
      style={{
        backgroundImage: "url('/Images/image23.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Frequently Asked Questions"
    >
      <header className="flex justify-center items-center self-stretch md:gap-0 gap-2 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2 p-2 bg-[#FFF1EF] rounded-lg">
            <h1 className="lg:text-sm md:text-xs text-[0.625rem] font-bold text-[#FF6F61]">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <h2 className="lg:text-[2.5rem] md:text-[2rem] text-2xl lg:leading-[3rem] md:leading-[2.4rem] font-bold text-center text-[#424242]">
            Listen to what our customers <br />
            are saying.
          </h2>
        </div>
      </header>
      <div className="faq-items border border-[#C4C4C4] rounded-2xl flex flex-col justify-center lg:p-2 md:p-2 gap-4 self-stretch bg-[#FAFAFA]">
        <div className="">
          {filteredData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === filteredData.length - 1}
              isOpen={openIndex === index} // Check if the current FAQ is open
              onToggle={() => handleToggle(index)} // Handle toggle
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
 }

 function FaqItem({ question, answer, isOpen, onToggle, index, isLast }) {
  return (
    <article
      className={clsx(
        "faq-item bg-[#FAFAFA] p-4 gap-2 transition duration-300 self-stretch",
        {
          "border-b": !isLast, // To change the border of the last faq question
        }
      )}
    >
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
        className={clsx(
          "w-full text-left flex justify-between items-center font-medium text-gray-800 transition duration-300 py-2 px-4 md:gap-4 ",
          {
            "bg-[#FFF1EF] items-center gap-4 rounded-3xl font-bold md:text-base text-red-400 self-stretch":
              isOpen,
          }
        )}
        onClick={onToggle}
      >
        <span className=" gap-8 lg:text-base md:text-sm text-xs font-bold">
          {question}
        </span>
        
        <span
                  className={`transform transition-transform  ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <RiArrowDropDownLine className="w-8 h-8" />
                </span>
      </button>
      {isOpen && (
        <div
          id={`faq-${index}`}
          className="mt-2 text-gray-600 lg:text-base md:text-sm text-xs pl-4 items-center gap-2"
          role="region"
          aria-labelledby={`faq-question-${index}`}
        >
          {answer}
        </div>
      )}
    </article>
  );
}

export default FaqSection;
