import { useEffect, useState } from "react";
import axios from "../api/axiosConfig.js";
import BillCard from "../components/BillCard.jsx";
import Spinner from "../components/Spinner.jsx";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBills = () => {
    setLoading(true);
    let url = "/bills";
    if(category) url += `?category=${category}`;
    axios.get(url)
      .then(res => setBills(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBills(); }, [category]);

  if (loading) return <Spinner />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Bills</h1>
      <select className="mb-4 p-2 border" value={category} onChange={e=>setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Electricity">Electricity</option>
        <option value="Gas">Gas</option>
        <option value="Water">Water</option>
        <option value="Internet">Internet</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bills.map(bill => <BillCard key={bill._id} bill={bill} />)}
      </div>
    </div>
  );
};

export default Bills;
