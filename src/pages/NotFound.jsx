import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
    <h1 className="text-[10rem] md:text-[12rem] font-extrabold animate-bounce">404</h1>
    <p className="text-2xl md:text-3xl mt-4 font-semibold">Oops! Page Not Found</p>
    <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-md text-center">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <Link
      to="/"
      className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1 hover:scale-105"
    >
      Go Back Home
    </Link>
  </div>
);

export default NotFound;
