import { useEffect, useState } from "react";
import axios from "../api/axiosConfig.js";
import { Link } from "react-router-dom";
import BillCard from "../components/BillCard.jsx";
import Spinner from "../components/Spinner.jsx";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch bills from backend
  const fetchBills = () => {
    setLoading(true);
    let url = "/bills";
    if (category) url += `?category=${category}`;
    axios
      .get(url)
      .then((res) => setBills(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBills();
  }, [category]);

  if (loading) return <Spinner />;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">All Bills</h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <select
          className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electricity">Electricity</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
          <option value="Internet">Internet</option>
        </select>
      </div>

      {/* Bills Grid */}
      {bills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bills.map((bill) => (
            <div key={bill._id} className="group relative">
              <BillCard bill={bill} />
              {/* See Details Button */}
              <Link
                to={`/bill/${bill._id}`}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No bills found for this category.
        </p>
      )}
    </div>
  );
};

export default Bills;
