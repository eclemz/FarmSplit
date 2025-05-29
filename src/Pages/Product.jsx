import { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { OrderCards, products } from "../data/cardData";
import { FaStar } from "react-icons/fa6";
import Breadcrumbs from "../Components/BreadCrumbs";
import { FaChevronDown } from "react-icons/fa";
import OrderCard from "../Components/OrderCard"; 
import { Buttons } from "../Components/Buttons";
import ProductCard from "../Components/ProductCard";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../Components/CartContext";
import toast, { Toaster } from 'react-hot-toast';

function getCols(width) {
  if (width >= 1280) return 4; // lg
  if (width >= 1024) return 3; // lt
  if (width >= 768)  return 3; // md
  return 2;                    // mobile
}
function boldNumberRangesWithBreaks(text) {
  const replaced = text.replace(/<br\s*\/?>/gi, '[[BR]]');
  return replaced.split(/(\n|\\n|\[\[BR\]\])/).flatMap((part, idx) => {
    if (part === '\n' || part === '\\n' || part === '[[BR]]') return <br key={`br${idx}`} />;
    return part.split(/(\d+\s*[–-]\s*\d+|\d+)/g).map((piece, j) =>
      /^(\d+\s*[–-]\s*\d+|\d+)$/.test(piece) ? <strong key={`${idx}-${j}`}>{piece}</strong> : piece
    );
  });
}

function Product() {
  const { productId } = useParams();
  const [open, setOpen] = useState(false);
  const [cols, setCols] = useState(getCols(window.innerWidth));
  const product = products.find(
    (p) => String(p.id) === decodeURIComponent(productId)
  );
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Update cols on window resize
  useEffect(() => {
    const handleResize = () => setCols(getCols(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleAddToCart() {
  addToCart(product, quantity);
  toast.success('Added to cart!');
}
  function decreaseQuantity() {
    setQuantity((qty) => (qty > 1 ? qty - 1 : 1));
  }
  function increaseQuantity() {
    setQuantity((qty) => qty + 1);
  }
  const alsoViewed = useMemo(() => {
    if (!product) return [];
    const filtered = products.filter(
      (p) => p.category === product.category && p.id !== product.id
    );
    
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    return filtered;
  }, [product]);

  if (!product) {
    return (
      <div>
        Product not found. <Link to="/marketplace">Go back</Link>
      </div>
    );
  }
  
  return (
    <main key={productId} >
      <div className="fixed z-40 bg-white shadow w-full lg:px-12 lt:px-16 md:py-4 md:px-8 px-4" >
        <Breadcrumbs />
      </div>
      <div className="h-20"></div>
      <div className="flex md:flex-row flex-col items-center self-stretch lg:py-4 lg:px-16 pt-4 lt:px-16 pb-8 md:px-8 px-4 gap-8">
        {/* ... Product details for desktop... */}
        <div className="hidden lg:flex h-[31.625rem] w-full flex-col items-start gap-1 self-stretch flex-1">
        <img
            src={product.images}
            alt={product.name}
            className=" self-stretch rounded-lg"
          />
          </div>
          <div className="hidden lg:flex flex-col p-2 items-start gap-2 flex-1">
            {/* <div className="flex p-2 flex-col justify-center "></div> */}
            <div className=" flex flex-col justify-center items-start p-2 gap-2 self-stretch">
              <div className="flex items-center gap-2 self-stretch">
                <div className="flex flex-col items-start gap-2 flex-1">
            <span className="flex gap-2 self-stretch text-xs font-semibold text-[#FF6F61]">
              {product.category}
            </span>
            <span className="flex items-center gap-2 self-stretch text-[1.25rem] text-[#424242]">
              {product.name}
            </span>
            </div>
            <span className="flex flex-col items-start gap-1 text-[1.25rem] font-bold">
                ₦{product.price?.toLocaleString() ?? "N/A"}
              </span>
            </div>
              <span className="flex flex-col justify-center items-start gap-1 self-stretch text-base">{product.Quantity} Portion</span>
              <span className="flex items-center gap-2">
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#C4C4C4] h-4 w-4" />
              <p className="text-sm text-[#C4C4C4]">(10)</p>
            </span>
          </div>
          <div className="flex items-center p-2 gap-8">
            <button
              onClick={decreaseQuantity}
              className="flex p-2 gap-2 items-center text-[#424242] rounded border"
              aria-label="Decrease quantity"
            >
              <span className="flex h-5 w-5 text-xl items-center justify-center">-</span>
            </button>
            <span className="flex p-2 gap-2 text-center">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="flex p-2 gap-2 items-center text-[#424242] rounded border"
              aria-label="Increase quantity"
            >
              <span className="flex h-5 w-5 text-xl items-center justify-center">+</span>
            </button>
          </div>
          <Buttons className={'group w-[18.063rem] '} onClick={handleAddToCart}>
          <span className="group-hover:bg-[#E86558] text-base font-bold" >
            Add to Cart
            </span>
            <MdOutlineShoppingCart className="group-active:text-[#B54F45] group-hover:bg-[#E86558] transition-all duration-150 h-4 w-4 scale-80 cursor-pointer shrink-0" />
        </Buttons>
        <div className=" flex flex-col items-start self-stretch gap-2 p-2 flex-1">
          <div className="flex flex-col justify-center items-start self-stretch gap-2">
            
            <button
              className="flex items-center self-stretch gap-2 cursor-pointer"
              onClick={() => setOpen((o) => !o)}
              role="button"
              tabIndex={0}
              aria-expanded={open}
            >
              <img src="/Images/3dicons.png" alt="" className="h-8 w-8" />
              <h2 className="flex items-center self-stretch py-2 gap-2 flex-1 text-base font-bold">
                Foodstuff Description
              </h2>
              <div className="flex items-center justify-center h-6 w-6 gap-1 transition-transform duration-200">
                <FaChevronDown
                  className={`h-2 w-2 text-[#424242] transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            {open && ( 
              <p className="text-base text-[#424242]">
                {product.desc || "No description available."}
              </p>
            )}
            <hr className="w-full border-t border-[#C4C4C4] my-2" />
          </div>
          <OrderCard />
          <Buttons className={'lg:hidden block group self-stretch '}>
          <span className="md:text-sm font-bold" onClick={handleAddToCart}>Add to Cart</span>
        </Buttons>
        </div>
        </div>
        {/* ... Product details for small desktop and below... */}
        <div className="lg:hidden flex flex-col md:justify-end items-start self-stretch rounded-lg bg-white border md:flex-1">
          <img
            src={product.images}
            alt={product.name}
            className=" h-[22.313rem] flex rounded-t-lg items-start gap-1 self-stretch flex-1"
          />
          
          <div className=" flex flex-col justify-center items-start p-2 gap-2 self-stretch">
            <span className="flex items-center gap-2 self-stretch md:text-[0.625rem] text-[0.5rem] font-semibold text-[#FF6F61]">
              {product.category}
            </span>
            <span className="flex items-center gap-2 self-stretch text-base">
              {product.name}
            </span>
            <div className="flex flex-col justify-center items-start gap-1 self-stretch">
              <span className="md:text-sm">{product.Quantity} Portion</span>
              <span className="md:text-lg text-sm font-bold">
                ₦{product.price?.toLocaleString() ?? "N/A"}
              </span>
            </div>
            <span className="flex items-center md:gap-2">
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#FFB030] h-4 w-4" />
              <FaStar className="text-[#C4C4C4] h-4 w-4" />
              <p className="text-sm text-[#C4C4C4]">(10)</p>
            </span>
          </div>
          <div className="flex items-center p-2 gap-10">
            <button
              onClick={decreaseQuantity}
              className="flex p-2 gap-2 items-center text-[#424242] rounded border"
              aria-label="Decrease quantity"
            >
              <span className="flex h-6 w-6 text-2xl font-bold items-center justify-center">-</span>
            </button>
            <span className="flex p-2 gap-2 text-center">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="flex p-2 gap-2 items-center text-[#424242] rounded border"
              aria-label="Increase quantity"
            >
              <span className="flex h-6 w-6 text-2xl font-bold items-center justify-center">+</span>
            </button>
          </div>
        </div>
        <div className="lg:hidden flex flex-col items-start self-stretch gap-2 p-2 flex-1">
          <div className="flex flex-col justify-center items-start self-stretch gap-2">
            
            <button
              className="flex items-center self-stretch gap-2 cursor-pointer"
              onClick={() => setOpen((o) => !o)}
              role="button"
              tabIndex={0}
              aria-expanded={open}
            >
              <img src="/Images/3dicons.png" alt="" className="h-6 w-6" />
              <h2 className="flex items-center self-stretch py-2 gap-2 flex-1 text-sm font-bold">
                Foodstuff Description
              </h2>
              <div className="flex items-center justify-center h-6 w-6 gap-1 transition-transform duration-200">
                <FaChevronDown
                  className={`h-2 w-2 text-[#424242] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            {open && (
              <p className=" md:text-xs text-sm text-[#424242]">
                {products.desc || "No description available."}
              </p>
            )}
            <hr className="w-full border-t border-[#C4C4C4] my-2" />
          </div>
          <OrderCard />
          <Buttons className={'lg:hidden block group self-stretch '}>
          <span className="md:text-sm font-bold" onClick={handleAddToCart}>Add to Cart</span>
        </Buttons>
        </div>
        
      </div>
      <section className="flex flex-col items-start self-stretch lg:px-16 lt:px-16 md:px-8 px-4 py-8 md:gap-6 gap-5">
        <span className=" text-xl font-bold text-[#424242]">Customers also viewed</span>
        <div className="flex-col items-start self-stretch gap-2">
          {alsoViewed.length > 0 && (
            <ProductCard
              data={alsoViewed.slice(0, cols)} // Only as many cards as columns
            />
          )}
        </div>
      </section>
      <div className="flex py-16 px-8 items-center self-stretch bg-[#FF6F61]">
        <span className="text-2xl font-bold text-white m-auto">
          Place your Ads here
        </span>
      </div>
    </main>
  );
}

export default Product;