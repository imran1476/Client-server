import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "../api/axiosConfig.js";
import Spinner from "../components/Spinner.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { successToast, errorToast } from "../components/Toast.jsx";

const BillDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/bills/${id}`)
      .then(res => setBill(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const payBill = () => {
    if(!user) return errorToast("Login required to pay bill");
    axios.post("/myBills", {
      billsId: bill._id,
      username: user.displayName || user.email,
      email: user.email,
      amount: bill.amount,
      date: new Date(),
      address: "",
      phone: ""
    }).then(()=>successToast("Bill paid successfully"))
      .catch(()=>errorToast("Payment failed"));
  };

  if (loading) return <Spinner />;
  if(!bill) return <p className="p-6">Bill not found</p>;

  return (
    <div className="p-6">
      <img src={bill.image} alt={bill.title} className="w-full h-64 object-cover rounded"/>
      <h2 className="text-2xl font-bold mt-4">{bill.title}</h2>
      <p>{bill.category} | {bill.location}</p>
      <p className="font-bold mt-2">৳{bill.amount}</p>
      <p className="mt-2">{bill.description}</p>
      <button 
        onClick={payBill} 
        className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${new Date(bill.date).getMonth() !== new Date().getMonth() ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={new Date(bill.date).getMonth() !== new Date().getMonth()}
      >
        Pay Bill
      </button>
    </div>
  );
};

export default BillDetails;
