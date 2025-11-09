import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // your existing logo
import heroImage from "../assets/innovation.svg"; // new image

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col">
      {/* 🌐 Navbar */}
      <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Global Genesis Logo"
            className="w-10 h-10"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <h1 className="text-2xl font-bold text-blue-700">Global Genesis</h1>
        </div>

        <div className="space-x-6 font-medium">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>

      {/* ✨ Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow px-8 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight mb-6">
            Empowering Innovation<br />Through Data, AI & Policy.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover open-source projects driving progress in FinTech, DeFi,
            AI Forecasting, Financial Inclusion, and Policy Analytics — all from one platform.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-lg transition-all"
            >
              Explore Projects <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* 🚀 Hero Illustration */}
        <motion.img
          src={heroImage}
          alt="Innovation Illustration"
          className="w-80 lg:w-[450px] mt-10 lg:mt-0 drop-shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* 🌍 Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-200">
        © 2025 Global Genesis | Built for Hacknomics 2025
      </footer>
    </div>
  );
}
