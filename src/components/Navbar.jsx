import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          🌍 Global Genesis
        </h1>
        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
