export default function ProductCard({ product }) {

  const handleAddToCart = () => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
          className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <p className="text-gold font-bold">₹{product.price}</p>

        <button
          onClick={handleAddToCart}
          className="w-full mt-2 bg-black text-white dark:bg-gold dark:text-black py-2 rounded hover:scale-105 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}