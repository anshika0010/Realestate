import React from "react";
import logo from "../assets/logo1.jpg";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
const Foote = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-gray-50">
        <div className="container-custom pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="logo" className="w-40" />
              </div>

              <p className="text-gray-300 mb-6">
                Realton is a premium real estate agency that specializes in
                helping clients buy, sell, and rent properties in the most
                desirable neighborhoods.
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    Listings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-coral-500 mr-3 mt-0.5" />
                  <span className="text-gray-300">
                    Sector 16, Noida,
                    <br />
                    Uttar-Pradesh India - 201301
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-coral-500 mr-3" />
                  <a
                    href="tel:+12345678900"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-coral-500 mr-3" />
                  <a
                    href="mailto:info@realton.com"
                    className="text-gray-300 hover:text-coral-500 transition-colors"
                  >
                    info@realton.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to get the latest updates and
                offers.
              </p>

              <form className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-coral-500 text-white p-1.5 rounded-md hover:bg-coral-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <p className="text-gray-400 text-sm">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Dream and Innovation. All
                rights reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foote;
