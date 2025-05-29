import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Buttons6 } from "./Buttons";
import { useCart } from "../Components/CartContext";
import toast from 'react-hot-toast';


function ProductCard({ data }) {
  const { addToCart } = useCart();

  function handleAddToCart(product, quantity, e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault(); // This line prevents the Link navigation!
    }
    addToCart(product, quantity);
    toast.success('Added to cart!');
  }
  return (
  <section>
    <div className="grid lg:grid-cols-4 lt:grid-cols-3 md:grid-cols-3 grid-cols-2 items-center lg:gap-8 lt:gap-6 md:gap-6 gap-2 self-stretch flex-1">
        {data.map((card, index) => (
          <Link to={`/marketplace/${encodeURIComponent(card.id)}`}
          key={card.id}>
            <div  
            className="flex flex-col items-start flex-1 border overflow-hidden border-[#C4C4C4] lg:rounded-2xl lt:rounded-xl md:rounded-xl rounded-lg bg-[#FAFAFA]">
              <div className="flex flex-col items-start lg:gap-2 lt:gap-[0.394rem] md:gap-[0.394rem] gap-1 self-stretch">
                <img src={card.images} alt="" className="flex md:flex-shrink-0 flex-1 self-stretch" />
              </div>
              
              <div className="flex flex-col justify-center items-start md:p-2 p-2 md:gap-2 gap-1 self-stretch">
                <span className="flex items-center gap-2 self-stretch lg:text-xs md:text-[0.635rem] text-[0.5rem] font-semibold text-[#FF6F61] leading-[140%]">
                  {card.category}
                </span> 
                <span className="flex items-center gap-2 self-stretch lg:text-[1.25rem] md:text-lg text-base leading-[120%]">{card.name}</span>
                <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <span className="lg:text-base md:text-sm text-xs leading[150%]">{card.Quantity} Portion</span>
                <span className="lg:text-[1.25rem] md:text-lg text-base font-bold text-[#424242]">₦{card.price.toLocaleString()}</span>
                <span className="flex items-center md:gap-2">
                    <FaStar className="text-[#FFB030] h-4 w-4" />
                    <FaStar className="text-[#FFB030] h-4 w-4" />
                    <FaStar className="text-[#FFB030] h-4 w-4" />
                    <FaStar className="text-[#C4C4C4] h-4 w-4" />
                    <p className="text-sm text-[#C4C4C4]">(10)</p>
                </span>
                </div>
                
                <Buttons6 className='group self-stretch' onClick={(e) => handleAddToCart(card, 1, e)}
                type="button">
                   <span className="group-active:text-[#B54F45] transition-all duration-150"> Add to cart </span>
                    <MdOutlineShoppingCart className="group-active:text-[#B54F45] group-hover:text-[#E86558] transition-all duration-150 h-3 w-3 text-[#FF6F61] scale-80 cursor-pointer shrink-0"/>
                </Buttons6>
              </div>
            </div>
            </Link>
        ))} 
      </div>
      
  </section>
  );
}

export default ProductCard; 



