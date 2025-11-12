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
    // Password validation
    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length<6){
      return errorToast("Password must have uppercase, lowercase & at least 6 chars");
    }
    try {
      await registerUser(email, password);
      successToast("Registration successful");
      navigate("/");
    } catch(err){
      errorToast(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" value={name} onChange={e=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Register</button>
      </form>
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  );
};

export default Register;
