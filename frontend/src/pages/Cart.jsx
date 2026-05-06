import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-10 min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price} × {item.qty}</p>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl mt-6 font-bold">
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}