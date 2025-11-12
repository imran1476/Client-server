// import { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext.jsx";
// import { successToast, errorToast } from "../components/Toast.jsx";

// const Login = () => {
//   const { loginUser, loginWithGoogle } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await loginUser(email, password);
//       successToast("Login successful");
//       navigate("/");
//     } catch(err) {
//       errorToast(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       successToast("Login successful");
//       navigate("/");
//     } catch(err) {
//       errorToast(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={e=>setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={e=>setPassword(e.target.value)} required />
//         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
//       </form>
//       <button onClick={handleGoogleLogin} className="w-full mt-4 p-2 bg-red-500 text-white rounded">Login with Google</button>
//       <p className="mt-4">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
//     </div>
//   );
// };

// export default Login;
