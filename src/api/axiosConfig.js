// src/api/axiosConfig.js
import axios from "axios";

// Axios instance for backend API calls
const instance = axios.create({
  baseURL: "https://utility-server-qr1e.vercel.app/api", // ✅ /api যুক্ত করা হলো
  // যদি cookies বা auth ব্যবহার করো, uncomment করো
  // withCredentials: true,
});

// Optional: Add interceptors to handle errors globally
instance.interceptors.response.use(
  response => response, // যদি response ঠিক থাকে, return করবে
  error => {
    console.error("Axios error:", error); // error console এ দেখাবে
    return Promise.reject(error);
  }
);

export default instance;
