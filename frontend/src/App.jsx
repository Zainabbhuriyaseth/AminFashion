import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* Components */
import Navbar from "./components/Navbar";

/* Pages */
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Context */
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          
          {/* DARK MODE WRAPPER */}
          <div className={darkMode ? "dark" : ""}>

            {/* MAIN BACKGROUND */}
            <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition">

              {/* NAVBAR */}
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

              {/* ROUTES */}
              <Routes>

                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* SHOP */}
                <Route path="/shop" element={<Shop />} />

                {/* PRODUCT DETAILS */}
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* CART */}
                <Route path="/cart" element={<Cart />} />

                {/* CHECKOUT */}
                <Route path="/checkout" element={<Checkout />} />

                {/* SUCCESS */}
                <Route path="/success" element={<OrderSuccess />} />

                {/* AUTH */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

              </Routes>

            </div>
          </div>

        </CartProvider>
      </AuthProvider>
    </Router>
  );
}n