import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span>Utility<span className="text-blue-500">Bill</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/bills" className="hover:text-blue-400 transition">Bills</Link>

          {user ? (
            <>
              <Link to="/my-pay-bills" className="hover:text-blue-400 transition">My Pay Bills</Link>

              {/* Profile Avatar */}
              <Link to="/profile" className="flex items-center gap-2 hover:text-blue-400 transition">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-600"
                />
                <span className="hidden lg:block">{user.displayName || "User"}</span>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
              <Link
                to="/register"
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-center font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Home</Link>
          <Link to="/bills" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Bills</Link>

          {user ? (
            <>
              <Link to="/my-pay-bills" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">My Pay Bills</Link>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Profile</Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Login</Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block bg-blue-600 py-2 rounded-md hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
