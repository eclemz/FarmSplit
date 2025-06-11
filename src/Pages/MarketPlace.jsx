import { useState } from "react";
import { useMemo } from "react";
import { products } from "../data/cardData";
import CustomDropdown from "../Components/CustomDropdown";
import BreadCrumbs from "../Components/BreadCrumbs";
import ProductCard from "../Components/ProductCard";
import { useSearch } from "../Contexts/SearchContext";

// Prepare dropdown options
const categories = [
  { value: "All", label: "All" },
  ...Array.from(new Set(products.map(p => p.category))).map(cat => ({
    value: cat,
    label: cat,
  })),
];

const sortOptions = [
  { value: "default", label: "Sort by" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "name-asc", label: "Name: A → Z" },
  { value: "name-desc", label: "Name: Z → A" },
];

function MarketPlace() {
  const { searchQuery } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");


  // Filtering: search + category
  const filteredProducts = useMemo(() => {
    let result = products;

    // Search
    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q))
      );
    }

    // Category
    if (selectedCategory !== "All") {
      result = result.filter(
        (p) =>
          p.category &&
          p.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);



  // Sorting
  const sorted = useMemo(() => {
    let result = [...filteredProducts];
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    return result;
  }, [filteredProducts, sortOption]);

  const buttonCategories = categories;

  function handleCategoryClick(val) {
    setSelectedCategory(val);
  }

  return (
    <main className="min-h-screen lg:pt-0 md:pt-4">
      <div className="fixed z-40 w-full shadow bg-white flex flex-col items-center self-stretch lg:px-16 px-4">
        <div className="md:hidden flex flex-row items-center self-stretch py-2 px-2">
          <CustomDropdown
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            buttonLabel="Category"
          />
          <CustomDropdown
            options={sortOptions}
            value={sortOption}
            onChange={setSortOption}
            buttonLabel="Sort by"
          />
        </div>
        <div className="hidden lg:px-0 md:px-4 w-full bg-white md:flex py-4 items-center self-stretch md:gap-4 ">
           {buttonCategories.map(cat => (
          <button
            key={cat.value}
            className={` px-4 py-2 rounded-lg transition justify-center items-center flex-1 md:gap-2  md:text-sm md:hover:text-[#E86558] md:hover:underline
              ${selectedCategory === cat.value ? "bg-[#FF6F61] md:hover:text-white text-white font-bold" : "bg-white text-[#424242] "}
            `}
            onClick={() => handleCategoryClick(cat.value)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
        </div>
        </div>
        <div className="h-16"></div>
        <div className="lg:px-16 md:py-2 md:px-4 px-3 self-stretch">
        <BreadCrumbs/>
        </div>
    
        {/* Product grid */}
          <section className="lg:pt-0 lg:pb-8 lg:px-16 md:py-4 md:px-8 px-4 pb-8 gap-2">
              <ProductCard data={sorted} disableLimit={true}
              />
              
          </section>
        
        <div className="flex md:py-10 md:px-4 py-8 px-8 items-center self-stretch bg-[#FF6F61]">
        <span className="md:text-3xl text-2xl font-bold text-white m-auto">
          Place your Ads here
        </span>
      </div>
        {/* <section className="lg:py-8 lg:px-16 md:py-4 md:px-8 px-4 pt-4 pb-8 gap-2">
            <ProductCard data={sorted} disableLimit={true}
            />
          </section> */}
    </main>
  );
}

export default MarketPlace;