import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

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
    <nav className="w-full px-8 py-5 flex justify-between items-center 
    bg-white dark:bg-black text-black dark:text-white 
    border-b border-gray-200 dark:border-gray-800 
    sticky top-0 z-50">

      {/* LEFT - Logo */}
      <Link
        to="/"
        className="text-2xl tracking-widest font-semibold text-gold"
      >
        AMIN FASHION
      </Link>

      {/* CENTER - Menu */}
      <ul className="hidden md:flex gap-10 text-sm tracking-wide">

        <li className="group cursor-pointer">
          <Link to="/">HOME</Link>
          <div className="h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
        </li>

        <li className="group cursor-pointer">
          <Link to="/shop">SHOP</Link>
          <div className="h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
        </li>

        <li className="group cursor-pointer">
          <span>ABOUT</span>
          <div className="h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
        </li>

      </ul>

      {/* RIGHT - Icons */}
      <div className="flex items-center gap-6 text-lg">

        <FaSearch className="cursor-pointer hover:text-gold transition" />

        <FaUser className="cursor-pointer hover:text-gold transition" />

        <Link to="/cart">
          <FaShoppingCart className="cursor-pointer hover:text-gold transition" />
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xs border px-3 py-1 rounded-full hover:bg-gold hover:text-black transition"
        >
          {darkMode ? "LIGHT" : "DARK"}
        </button>

      </div>
    </nav>
  );
}