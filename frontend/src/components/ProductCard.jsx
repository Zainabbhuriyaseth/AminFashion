import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-[#0c0c0c] rounded-lg overflow-hidden shadow hover:shadow-xl transition">

      {/* IMAGE */}
      <div
        onClick={() => navigate(`/product/${product._id}`)}
        className="cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h3 className="font-medium">{product.name}</h3>

        <p className="text-gold mt-1">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-3 bg-black text-white dark:bg-gold dark:text-black py-2 rounded hover:scale-105 transition"
        >
          ADD TO CART
        </button>

      </div>
    </div>
  );
}