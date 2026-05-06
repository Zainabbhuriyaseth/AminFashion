import { useEffect, useState } from "react";
import BASE_URL from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { logout } = useAuth();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  /* FETCH USER + ORDERS */
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${BASE_URL}/users/me`, {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
      });

    fetch(`${BASE_URL}/orders/my`, {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  /* UPDATE PROFILE */
  const updateProfile = async () => {
    await fetch(`${BASE_URL}/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name, password }),
    });

    alert("Profile updated");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-16 py-10">

      <h1 className="text-3xl mb-8">My Profile</h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* PROFILE FORM */}
        <div className="border p-6 rounded">

          <h2 className="mb-4 text-xl">Edit Profile</h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border bg-transparent"
            placeholder="Name"
          />

          <input
            type="email"
            value={user.email || ""}
            disabled
            className="w-full p-2 mb-3 border bg-gray-800 text-gray-400"
          />

          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border bg-transparent"
          />

          <button
            onClick={updateProfile}
            className="bg-gold text-black px-4 py-2 rounded w-full"
          >
            Update Profile
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="mt-3 border px-4 py-2 w-full"
          >
            Logout
          </button>

        </div>

        {/* ORDER HISTORY */}
        <div>

          <h2 className="mb-4 text-xl">My Orders</h2>

          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            <div className="space-y-4">

              {orders.map((order) => (
                <div key={order._id} className="border p-4 rounded">

                  <p className="text-sm text-gray-400">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  <p>Total: ₹{order.total}</p>

                  {order.items.map((item, i) => (
                    <p key={i} className="text-sm">
                      {item.name} × {item.qty}
                    </p>
                  ))}

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}