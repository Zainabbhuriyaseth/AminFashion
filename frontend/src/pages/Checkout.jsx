import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BASE_URL from "../api";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (!user) {
    return <h1>Please login first</h1>;
  }

  const handleOrder = async () => {
    if (!name || !address) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          items: cart,
          total,
        }),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      if (res.ok) {
        clearCart();
        navigate("/success");
      } else {
        alert(data.error || "Order failed");
      }

    } catch (err) {
      console.log("ERROR:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 md:px-16 py-10">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT: FORM */}
        <div className="space-y-5">

          <h2 className="text-xl font-medium">Shipping Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded focus:outline-none focus:border-gold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Full Address"
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded focus:outline-none focus:border-gold"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-black text-white dark:bg-gold dark:text-black py-3 rounded hover:scale-105 transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="border border-gray-300 dark:border-gray-700 rounded p-6 space-y-4">

          <h2 className="text-xl font-medium">Order Summary</h2>

          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between text-sm">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-gold">₹{total}</span>
          </div>

        </div>

      </div>
    </div>
  );
}