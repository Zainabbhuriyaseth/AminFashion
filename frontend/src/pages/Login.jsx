import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import BASE_URL from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
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
      alert(data.error);
    }
  };

  return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white">

    <h1 className="text-3xl mb-6">Login</h1>

    <div className="space-y-4 w-80">
      <input
        placeholder="Email"
        className="w-full p-3 border rounded bg-transparent"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded bg-transparent"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-gold text-black py-3 rounded"
      >
        Login
      </button>
    </div>

  </div>
);
}