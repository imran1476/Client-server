import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (msg) => toast.success(msg);
export const errorToast = (msg) => toast.error(msg);
