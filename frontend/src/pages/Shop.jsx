import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BASE_URL from "../api";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const [showFilters, setShowFilters] = useState(false); // 👈 mobile toggle

  // Fetch products
  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  // Apply filters
  useEffect(() => {
    let temp = [...products];

    if (category !== "All") {
      temp = temp.filter((item) => item.category === category);
    }

    if (search) {
      temp = temp.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    temp = temp.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setFiltered(temp);
  }, [category, search, minPrice, maxPrice, products]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 md:px-16 py-8 md:py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-semibold tracking-wide text-center mb-6 md:mb-12">
        SHOP <span className="text-gold">COLLECTION</span>
      </h1>

      {/* 🔥 Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full border border-gold text-gold py-2 rounded"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 md:gap-10">

        {/* ================= FILTERS ================= */}
        <div
          className={`md:col-span-1 space-y-6 md:space-y-8 md:sticky md:top-24 h-fit 
          ${showFilters ? "block" : "hidden"} md:block`}
        >

          {/* SEARCH */}
          <div>
            <h3 className="text-xs md:text-sm mb-2 tracking-wide">SEARCH</h3>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-2 rounded focus:outline-none focus:border-gold text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* CATEGORY */}
          <div>
            <h3 className="text-xs md:text-sm mb-3 tracking-wide">CATEGORY</h3>

            <div className="flex flex-wrap gap-2">
              {["All", "Shirts", "T-Shirts", "Jackets", "Jeans"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 text-xs md:text-sm border rounded-full transition
                  ${
                    category === cat
                      ? "bg-gold text-black border-gold"
                      : "border-gray-500 text-gray-300 hover:border-gold hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE RANGE */}
          <div>
            <h3 className="text-xs md:text-sm mb-3 tracking-wide">
              PRICE RANGE
            </h3>

            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-2 rounded text-xs md:text-sm"
              />

              <span className="text-gray-400">—</span>

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-2 rounded text-xs md:text-sm"
              />
            </div>

            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />

            <div className="flex justify-between text-[10px] md:text-xs text-gray-400 mt-2">
              <span>₹0</span>
              <span>₹5000</span>
            </div>

            <p className="text-[10px] md:text-xs text-gray-400 mt-2">
              ₹{minPrice} – ₹{maxPrice}
            </p>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="md:col-span-3">

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}