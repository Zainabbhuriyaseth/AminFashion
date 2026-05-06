import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { FaShoppingBag, FaUser, FaBars } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-gold">AMIN</span> FASHION
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/shop" className="hover:text-gold transition">Shop</Link>

          {/* CART */}
          <Link to="/cart" className="relative flex items-center gap-1 hover:text-gold">
            <FaShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-gold text-black text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* USER */}
          {user ? (
            <div className="flex items-center gap-3">

              <Link to="/profile" className="flex items-center gap-1 hover:text-gold">
                <FaUser />
                <span className="text-xs">{user.name}</span>
              </Link>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-xs text-red-400 hover:underline"
              >
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-gold">Login</Link>
              <Link to="/register" className="hover:text-gold">Register</Link>
            </>
          )}

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-gray-400 px-3 py-1 rounded text-xs hover:border-gold hover:text-gold"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart ({totalItems})
          </Link>

          {user ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile ({user.name})
              </Link>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                  navigate("/");
                }}
                className="text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded text-sm"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      )}
    </nav>
  );
}