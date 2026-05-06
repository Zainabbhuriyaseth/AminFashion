import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center 
    bg-white dark:bg-black text-black dark:text-white shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide text-gold">
        Amin Fashion
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="hover:text-gold cursor-pointer">Home</li>
        <li className="hover:text-gold cursor-pointer">Shop</li>
        <li className="hover:text-gold cursor-pointer">About</li>
        <li className="hover:text-gold cursor-pointer">Contact</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="border px-3 py-1 rounded hover:bg-gold hover:text-black transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Cart Icon */}
        <span className="cursor-pointer">🛒</span>
      </div>
    </nav>
  );
}