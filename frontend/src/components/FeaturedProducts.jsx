import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import BASE_URL from "../api";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // ✅ ALWAYS runs
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="px-6 md:px-16 py-16 bg-white dark:bg-black text-black dark:text-white">

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Featured <span className="text-gold">Products</span>
      </h2>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center text-red-500">{error}</div>
      )}

      {/* Products */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
}