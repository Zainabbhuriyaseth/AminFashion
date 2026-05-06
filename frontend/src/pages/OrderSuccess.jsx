import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white text-center px-6">

      <div className="text-6xl mb-6">✅</div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Order Placed Successfully
      </h1>

      <p className="text-gray-500 mb-6">
        Thank you for shopping with us.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 border border-gold text-gold rounded hover:bg-gold hover:text-black"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-2 bg-gold text-black rounded hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>

    </div>
  );
}