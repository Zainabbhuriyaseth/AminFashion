import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import BASE_URL from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data);
        navigate("/");
      } else {
        alert(data.error || "Login failed");
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">

      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login to <span className="text-gold">Amin Fashion</span>
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-transparent rounded focus:outline-none focus:border-gold"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-transparent rounded focus:outline-none focus:border-gold"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white dark:bg-gold dark:text-black py-3 rounded hover:scale-105 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-gold">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}