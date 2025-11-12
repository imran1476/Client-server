import axios from "axios";

const instance = axios.create({
  baseURL: "https://utility-server-zmtl.vercel.app/api", // backend base URL
});

export default instance;
