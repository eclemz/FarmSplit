import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function Footer({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const filteredData = data.filter(
    (footerData) => footerData.title && footerData.items
  );
  return (
    <footer className="min-w-full flex flex-col items-start self-stretch md:gap-10 gap-8 py-10 lg:px-24 px-8 bg-[#FFF1EF]">
      <div className="hidden md:flex flex-col items-start self-stretch gap-8">
        <div className="flex flex-col items-start self-stretch gap-8">
          <div className="flex justify-between items-center self-stretch">
            <div className="flex items-end gap-1">
              <img
                className="h-10 w-10 aspect-square"
                src="./Images/Logo.svg"
                alt="Logo"
              />
              <p className="lg:text-base md:text-sm text-[#09AF54] font-bold ">
                Farm to table
              </p>
            </div>

            <div className="flex items-center lg:gap-5 md:gap-[0.625rem]">
              <div className="flex items-center gap-3">
                <h4 className="lg:text-base md:text-sm text-[#313131]">
                  Follow our Socials
                </h4>
              </div>
              <a
                href=""
                className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] bg-[#1877f2]"
              >
                <i
                  className="bx bx bxl-facebook h-5 w-5 shrink-0 text-center text-white"
                  alt="facebook logo"
                ></i>
              </a>
              <a
                href=""
                className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] instagram"
              >
                <i
                  className="bx bx bxl-instagram h-5 w-5 shrink-0 text-center text-white"
                  alt="instagram logo"
                ></i>
              </a>
              <a
                href=""
                className="flex justify-center items-center w-8 h-8 rounded-full pt-[2px] bg-[#0077b5]"
              >
                <i
                  className="bx bx bxl-linkedin h-5 w-5 shrink-0 text-center text-white"
                  alt="linkedin logo"
                ></i>
              </a>
              <a
                href=""
                className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] bg-[#1DA1F2]"
              >
                <i
                  className="bx bx bxl-twitter h-5 w-5 shrink-0 text-center text-white"
                  alt="twitter logo"
                ></i>
              </a>
            </div>
          </div>
          <div className="flex items-center self-stretch gap-20">
            <nav className="flex flex-col items-start flex-1 gap-4">
              <h4 className="lg:text-base md:text-sm font-bold self-stretch">
                ABOUT US
              </h4>
              <ul className="flex flex-col items-start gap-6">
                <li className="flex items-center self-stretch gap-2">
                  <a href="" className="lg:text-base md:text-sm ">
                    Meet the Team
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
              </ul>
            </nav>

            <nav className="flex flex-col items-start flex-1 gap-4">
              <h4 className="lg:text-base md:text-sm font-bold self-stretch">
                SERVICES
              </h4>
              <ul className="flex flex-col items-start gap-6">
                <li className="flex items-center self-stretch gap-2">
                  <a href="" className="lg:text-base md:text-sm">
                    Meet the Team
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
              </ul>
            </nav>

            <nav className="flex flex-col items-start flex-1 gap-4">
              <h4 className="lg:text-base md:text-sm font-bold self-stretch">
                HELP & SUPPORT
              </h4>
              <ul className="flex flex-col items-start gap-6">
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    Meet the Team
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
              </ul>
            </nav>

            <nav className="flex flex-col items-start flex-1 gap-4">
              <h4 className="lg:text-base md:text-sm font-bold self-stretch">
                FEEDBACK
              </h4>
              <ul className="flex flex-col items-start gap-6">
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    Meet the Team
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>

                <li>
                  <a href="" className="lg:text-base md:text-sm" title="">
                    button
                  </a>
                  <MdArrowOutward className="h-5 w-5" />
                </li>
              </ul>
            </nav>
          </div>

          <hr className="h-[2px] w-full text-[#C4C4C4]" />

          <div className="flex justify-between items-center self-stretch py-2 md:gap-12">
            <ul className="flex items-center md:gap-12">
              <li className="flex items-center gap-2">
                <a
                  href=""
                  className="lg:text-base md:text-sm text-[#424242]"
                  title="privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="flex  items-center gap-2">
                <a
                  href=""
                  className="lg:text-base md:text-sm text-[#424242]"
                  title="terms and condition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href=""
                  className="lg:text-base md:text-sm text-[#424242]"
                  title="sitemaps"
                >
                  Sitemaps
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <img
                src="/Images/paystack.svg"
                alt=""
                className="w-[120px] lg:h-[4.063rem] md:h-[2.5rem] "
              />
              <img
                src="/Images/flutterwave.svg"
                alt=""
                className="w-[120px] lg:h-[4.063rem] md:h-[1.7rem] hover:text-[#FF6F61]"
              />
              <img
                src="/Images/mastercard_icon.png"
                alt=""
                className="w-[70px] lg:h-[4.063rem] md:h-[2.5rem] hover:text-[#FF6F61]"
              />
              <img
                src="/Images/visa_icon.png"
                alt=""
                className="w-[70px] lg:h-[65px] md:h-[2.5rem] hover:text-[#FF6F61]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <section className="md:hidden flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            {/* Logo */}
            <div className="flex items-end gap-1">
              <img
                className="h-10 w-10 aspect-square"
                src="./Images/Logo.svg"
                alt="Logo"
              />
              <p className="text-xs text-[#09AF54] font-bold">Farm to table</p>
            </div>

            {/* Socials */}
            <div className="flex flex-col justify-center items-start gap-3">
              <h4 className="text-xs text-[#313131]">Follow our Socials</h4>
              <div className="flex items-center gap-5">
                <a
                  href=""
                  className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] bg-[#1877f2]"
                >
                  <i
                    className="bx bx bxl-facebook h-5 w-5 shrink-0 text-center text-white"
                    alt="facebook logo"
                  ></i>
                </a>
                <a
                  href=""
                  className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] instagram"
                >
                  <i
                    className="bx bx bxl-instagram h-5 w-5 shrink-0 text-center text-white"
                    alt="instagram logo"
                  ></i>
                </a>
                <a
                  href=""
                  className="flex justify-center items-center w-8 h-8 rounded-full pt-[2px] bg-[#0077b5]"
                >
                  <i
                    className="bx bx bxl-linkedin h-5 w-5 shrink-0 text-center text-white"
                    alt="linkedin logo"
                  ></i>
                </a>
                <a
                  href=""
                  className="flex justify-center items-center w-8 h-8 rounded-full pt-[2.5px] bg-[#1DA1F2]"
                >
                  <i
                    className="bx bx bxl-twitter h-5 w-5 shrink-0 text-center text-white"
                    alt="twitter logo"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Footer Toggle Sections */}
          <div className="flex flex-col justify-center items-start self-stretch gap-4">
            {filteredData.map((section, index) => (
              <FooterToggle
                key={index}
                title={section.title}
                items={section.items}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
function FooterToggle({ title, items, isOpen, onToggle}) {
 

  return (
    <div className=" flex flex-col justify-center items-start gap-2 self-stretch">
      <button
        onClick={onToggle}
        className=" flex items-center self-stretch gap-2 py-2 text-left"
      >
        <h3 className="text-sm font-bold flex-1 text-[#393939]">{title}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <RiArrowDropDownLine />
        </span>
      </button>

      {isOpen && (
        <ul className="mt-2 space-y-2 text-[#393939] text-sm">
          {items.map((item, index) => (
            <li key={index} className="">
              <a
                href={item.href}
                target="_blank"
                rel="blank"
                className="blank"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Footer;
