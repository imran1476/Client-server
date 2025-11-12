// import { useEffect, useState } from "react";
// import axios from "../api/axiosConfig.js";
// import BillCard from "../components/BillCard.jsx";
// import Spinner from "../components/Spinner.jsx";

// const Home = () => {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("/bills?limit=6")
//       .then(res => setBills(res.data))
//       .catch(err => console.log(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <Spinner />;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Recent Bills</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {bills.map(bill => <BillCard key={bill._id} bill={bill} />)}
//       </div>
//     </div>
//   );
// };

// export default Home;
