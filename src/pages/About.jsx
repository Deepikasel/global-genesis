import React from "react";
import { motion } from "framer-motion";
import innovationImg from "../assets/innovation.svg"; // 👈 add this image in src/assets

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-blue-700 mb-8 text-center"
      >
        About <span className="text-indigo-600">Global Genesis</span>
      </motion.h2>

      {/* Main Content */}
      <div className="max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
        {/* Left: Image */}
        <motion.img
          src={innovationImg}
          alt="Innovation"
          className="w-full lg:w-1/2 object-cover h-72 lg:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 lg:w-1/2"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Global Genesis</strong> is a dynamic innovation explorer that highlights 
            impactful open-source projects driving transformation across{" "}
            <span className="text-blue-600 font-medium">FinTech</span>,{" "}
            <span className="text-blue-600 font-medium">DeFi</span>,{" "}
            <span className="text-blue-600 font-medium">AI Forecasting</span>,{" "}
            and <span className="text-blue-600 font-medium">Policy Analytics</span>.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Developed for the <strong>Hacknomics 2025 Hackathon</strong>, this platform bridges 
            technology, economics, and innovation — enabling collaboration among 
            developers, researchers, and policymakers to build a more inclusive digital economy.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to make open innovation accessible, inspiring data-driven 
            solutions that shape a smarter, sustainable future.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm text-gray-500">
              💡 <strong>Built with:</strong> React.js, Tailwind CSS, and GitHub Open Data APIs
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
