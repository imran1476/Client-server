import { useEffect, useState, useContext } from "react";
import axios from "../api/axiosConfig.js";
import { AuthContext } from "../context/AuthContext.jsx";
import Spinner from "../components/Spinner.jsx";
import { successToast, errorToast } from "../components/Toast.jsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MyPayBills = () => {
  const { user } = useContext(AuthContext);
  const [myBills, setMyBills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBills = () => {
    setLoading(true);
    axios.get(`/myBills?email=${user.email}`)
      .then(res => setMyBills(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if(user) fetchMyBills();
  }, [user]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete this bill?")) {
      axios.delete(`/myBills/${id}`)
        .then(() => { successToast("Deleted successfully"); fetchMyBills(); })
        .catch(() => errorToast("Delete failed"));
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const tableColumn = ["Username","Email","Amount","Address","Phone","Date"];
    const tableRows = myBills.map(b => [
      b.username, b.email, b.amount, b.address, b.phone, new Date(b.date).toLocaleDateString()
    ]);
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("My Paid Bills Report", 14, 15);
    doc.save("my-bills.pdf");
  };

  if(!user) return <p className="p-6">Login required to view this page</p>;
  if(loading) return <Spinner />;

  const totalAmount = myBills.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Paid Bills</h1>
      <button onClick={handleDownload} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">Download PDF</button>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {myBills.map(b => (
            <tr key={b._id}>
              <td className="border p-2">{b.username}</td>
              <td className="border p-2">{b.email}</td>
              <td className="border p-2">৳{b.amount}</td>
              <td className="border p-2">{b.address}</td>
              <td className="border p-2">{b.phone}</td>
              <td className="border p-2">{new Date(b.date).toLocaleDateString()}</td>
              <td className="border p-2 space-x-2">
                <button className="px-2 py-1 bg-yellow-500 text-white rounded">Update</button>
                <button onClick={()=>handleDelete(b._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 font-bold">Total Amount: ৳{totalAmount}</p>
    </div>
  );
};

export default MyPayBills;
