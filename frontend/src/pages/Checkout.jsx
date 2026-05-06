import { useState } from "react";
import { useCart } from "../context/CartContext";
import BASE_URL from "../api";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleOrder = async () => {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        total,
        name,
        address,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(true);
      clearCart();
    } else {
      alert("Order failed");
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-2xl">✅ Order Placed Successfully!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-white dark:bg-black text-black dark:text-white">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded bg-transparent"
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Address"
            className="w-full border p-3 rounded bg-transparent"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={handleOrder}
            className="w-full bg-black text-white dark:bg-gold dark:text-black py-3 rounded"
          >
            Place Order
          </button>
        </div>

        {/* Summary */}
        <div className="border p-5 rounded">
          <h2 className="text-xl mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₹{item.price} x {item.qty}</span>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="text-lg font-bold">
            Total: ₹{total}
          </h3>
        </div>

      </div>
    </div>
  );
}