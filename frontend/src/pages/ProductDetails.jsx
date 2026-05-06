import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-10 bg-white dark:bg-black text-black dark:text-white">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg hover:scale-105 transition"
        />

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gold text-2xl font-semibold">
            ₹{product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            {product.description}
          </p>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white dark:bg-gold dark:text-black px-6 py-3 rounded hover:scale-105 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}