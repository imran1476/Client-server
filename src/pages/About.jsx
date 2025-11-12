import { Link } from "react-router-dom";
import { Users, CheckCircle, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-yellow-300">Utility Bill Management</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our platform helps you manage all your utility bills in one place — fast, secure, and efficient. 
          Never miss a payment and keep track of your expenses effortlessly.
        </p>
        <Link 
          to="/register" 
          className="mt-8 inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition transform hover:-translate-y-1 shadow-lg"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <Shield size={48} className="mx-auto mb-6 text-blue-500"/>
            <h3 className="text-2xl font-semibold mb-3">Secure & Trusted</h3>
            <p className="text-gray-600 leading-relaxed">
              Your payment and personal data is always safe with our platform. Security is our top priority.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <CheckCircle size={48} className="mx-auto mb-6 text-green-500"/>
            <h3 className="text-2xl font-semibold mb-3">Easy Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              Pay your electricity, gas, water, and internet bills easily in one click without any hassle.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
            <Users size={48} className="mx-auto mb-6 text-purple-500"/>
            <h3 className="text-2xl font-semibold mb-3">User Friendly</h3>
            <p className="text-gray-600 leading-relaxed">
              Intuitive and simple design ensures you can navigate and manage your bills easily.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Managing Your Bills Today</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of users who manage their utility bills effortlessly and securely.
        </p>
        <Link 
          to="/register" 
          className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:-translate-y-1 shadow-lg"
        >
          Create an Account
        </Link>
      </section>
    </div>
  );
};

export default About;
