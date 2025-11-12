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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    additionalInfo: "",
  });

  useEffect(() => {
    axios
      .get(`/bills/${id}`)
      .then((res) => setBill(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (!bill) return <p className="p-6 text-center text-gray-500">Bill not found</p>;

  const currentMonth = new Date().getMonth();
  const billMonth = new Date(bill.date).getMonth();
  const canPay = currentMonth === billMonth;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePay = () => {
    if (!user) return errorToast("Login required to pay bill");

    axios
      .post("/myBills", {
        billsId: bill._id,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        amount: bill.amount,
        date: new Date(),
        additionalInfo: formData.additionalInfo,
      })
      .then(() => {
        successToast("Bill paid successfully");
        setShowModal(false);
      })
      .catch(() => errorToast("Payment failed"));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Bill Info Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex">
        <img
          src={bill.image}
          alt={bill.title}
          className="w-full md:w-1/2 h-64 object-cover md:h-auto"
        />
        <div className="p-6 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-2">{bill.title}</h2>
            <p className="text-gray-500 mb-2">{bill.category} | {bill.location}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">৳{bill.amount}</p>
            <p className="text-gray-700">{bill.description}</p>
            <p className="text-gray-400 mt-2 text-sm">Date: {new Date(bill.date).toLocaleDateString()}</p>
          </div>

          <button
            onClick={() => canPay ? setShowModal(true) : null}
            disabled={!canPay}
            className={`mt-6 w-full md:w-auto px-6 py-3 font-semibold rounded-lg transition ${
              canPay ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 cursor-not-allowed text-gray-200"
            }`}
          >
            {canPay ? "Pay Bill" : "Only current month bills can be paid"}
          </button>
        </div>
      </div>

      {/* Pay Bill Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <h3 className="text-2xl font-bold mb-4 text-center">Pay Bill</h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="flex flex-col gap-3">
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="p-3 border rounded" />
              <input type="email" name="email" value={formData.email} readOnly className="p-3 border rounded bg-gray-100 cursor-not-allowed" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="p-3 border rounded" />
              <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="Additional Info (optional)" className="p-3 border rounded" rows="3"></textarea>
              <button
                onClick={handlePay}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-2"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillDetails;
