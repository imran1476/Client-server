import { Link } from "react-router-dom";

const BillCard = ({ bill }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <img src={bill.image} alt={bill.title} className="w-full h-40 object-cover rounded"/>
    <h3 className="text-lg font-semibold mt-2">{bill.title}</h3>
    <p className="text-gray-500">{bill.category} | {bill.location}</p>
    <p className="font-bold mt-1">৳{bill.amount}</p>
    <Link to={`/bills/${bill._id}`} className="mt-2 inline-block text-blue-500 hover:underline">See Details</Link>
  </div>
);

export default BillCard;
