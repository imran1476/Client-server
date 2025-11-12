import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            <h2 className="text-xl font-bold text-white">
              Utility<span className="text-blue-500">Bill</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Manage your monthly utility bills easily — Electricity, Gas, Water & Internet.
            Pay securely and track your payments anytime, anywhere.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/bills" className="hover:text-blue-400 transition">Bills</Link></li>
            <li><Link to="/my-pay-bills" className="hover:text-blue-400 transition">My Pay Bills</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@utilitybill.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhanmondi, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} <span className="text-blue-400">Utility Bill Management</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
