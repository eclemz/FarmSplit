import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Footer from "./Components/Footer.jsx";
import WhatsappBtn from "./Components/WhatsappBtn.jsx";
import HamburgerMenu from "./Components/HamburgerMenu.jsx";
import { footerData } from "./data/cardData";
import HomePage from "./Pages/HomePage.jsx";
import MarketPlace from "./Pages/MarketPlace.jsx";
import Subscription from "./Components/Subscription.jsx";
import Product from "./Pages/Product.jsx";
import ScrollToTop from "./Components/ScrollToTop";
import { CartProvider } from "./Components/CartContext";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./Contexts/SearchContext.jsx";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <Toaster />
          <ScrollToTop />
          <div className="overflow-hidden">
            <DashBoard />
            <HamburgerMenu />
            <div className="md:pt-[8rem] pt-[7.5rem]">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/marketplace/:productId" element={<Product />} />
              </Routes>
            </div>
            <Subscription />
            <Footer data={footerData} />
            <WhatsappBtn />
          </div>
        </Router>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
