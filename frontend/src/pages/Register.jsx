import { useState } from "react";
import BASE_URL from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registered successfully");
      navigate("/login");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white">

      <h1 className="text-3xl mb-6">Register</h1>

      <div className="space-y-4 w-80">
        <input
          placeholder="Name"
          className="w-full p-3 border rounded bg-transparent"
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleRegister}
          className="w-full bg-gold text-black py-3 rounded"
        >
          Register
        </button>
      </div>

    </div>
  );
}