import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { successToast, errorToast } from "../components/Toast.jsx";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6){
      return errorToast("Password must have uppercase, lowercase & at least 6 characters");
    }

    try {
      await registerUser(email, password, name);
      successToast("Registration successful");
      navigate("/");
    } catch(err){
      errorToast(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />

          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
