import { useEffect, useState } from "react";
import axios from "../api/axiosConfig.js";
import BillCard from "../components/BillCard.jsx";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/bills?limit=6")
      .then((res) => setBills(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="w-full">
      {/* Hero / Banner Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Simplify Your Utility Bill Management
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-blue-100">
          Manage all your electricity, gas, and water bills in one place — fast, secure, and efficient.
        </p>
        <Link
          to="/bills"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
        >
          View All Bills
        </Link>
      </section>

      {/* Bill Categories Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Bill Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Electricity", color: "from-yellow-400 to-orange-500" },
            { name: "Gas", color: "from-green-400 to-emerald-500" },
            { name: "Water", color: "from-blue-400 to-cyan-500" },
            { name: "Internet", color: "from-purple-400 to-indigo-500" },
          ].map((cat, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl shadow-lg text-white font-semibold bg-gradient-to-r ${cat.color} hover:scale-105 transform transition duration-300`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* Recent Bills Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 sm:mb-0">Recent Bills</h2>
          <Link
            to="/bills"
            className="text-blue-600 hover:underline font-medium"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bills.length > 0 ? (
            bills.map((bill) => <BillCard key={bill._id} bill={bill} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No bills found.
            </p>
          )}
        </div>
      </section>

      {/* About System Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Use Our System?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8 leading-relaxed">
          Stop worrying about missed payments. With our platform, you can monitor your bills, get reminders, and keep everything organized effortlessly.
        </p>
        <Link
          to="/about"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Learn More
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Start Managing Your Bills Efficiently Today
        </h2>
        <Link
          to="/register"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
