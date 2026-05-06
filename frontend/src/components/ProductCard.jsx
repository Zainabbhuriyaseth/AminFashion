import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group">

      {/* Clickable Image */}
      <div
        className="overflow-hidden cursor-pointer"
        onClick={handleNavigate}
      >
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
          className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">

        {/* Clickable Title */}
        <h3
          onClick={handleNavigate}
          className="text-lg font-semibold cursor-pointer hover:text-gold transition"
        >
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-gold font-bold text-lg">
          ₹{product.price}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-2 bg-black text-white dark:bg-gold dark:text-black py-2 rounded hover:scale-105 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}