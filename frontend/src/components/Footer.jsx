import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12 mt-16">

      <div className="grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-gold">
            AMIN FASHION
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Premium men's wear crafted for elegance and confidence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-xl">

            <a
              href="https://www.instagram.com/amin_fashion__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/people/Amin-Fashion/61586628963271/?rdid=W30oOyUU0sVqJgk8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17K85FA9t7%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
            >
              <FaFacebook />
            </a>

            

          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              <Link to="/" className="hover:text-gold">Home</Link>
            </li>

            <li>
              <Link to="/shop" className="hover:text-gold">Shop</Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-gold">Cart</Link>
            </li>

            <li>
              <Link to="/profile" className="hover:text-gold">Profile</Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>

          {/* ADDRESS */}
          <a
            href="https://www.google.com/maps/dir/AMIN+FASHION,+Shop+G-10,+Raj+Shree+City+Center,+near+Sagrampur+Water+Tank,+Sagrampura,+Surat,+Gujarat+395002/AMIN+FASHION,+Shop+G-10,+Raj+Shree+City+Center,+near+Sagrampur+Water+Tank,+Sagrampura,+Surat,+Gujarat+395002/@21.2074496,72.7910039,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3be04f3332af7f4f:0xba33eed4652b33f2!2m2!1d72.8253646!2d21.1882451!1m5!1m1!1s0x3be04f3332af7f4f:0xba33eed4652b33f2!2m2!1d72.8253646!2d21.1882451?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold"
          >
            <FaMapMarkerAlt />
            AMIN FASHION, Shop G-10, Raj Shree City Center,
            near Sagrampur Water Tank, 
            Sagrampura, 
            Surat, Gujarat 395002
          </a>

          {/* EMAIL */}
          <a
            href="mailto:support@aminfashion.com"
            className="block text-sm text-gray-400 mt-2 hover:text-gold"
          >
            aminfashion9221@gmail.com
          </a>

          {/* PHONE */}
          <a
            href="tel:+919999999999"
            className="block text-sm text-gray-400 mt-2 hover:text-gold"
          >
            +91 70488 19221
          </a>

        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © 2026 Amin Fashion. All rights reserved.
      </div>

    </footer>
  );
}