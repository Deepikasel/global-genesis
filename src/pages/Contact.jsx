import React from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

export default function Contact() {
  const members = [
    {
      name: "Deepika Selvaraj",
      role: "3rd Year, B.Tech Information Technology",
      email: "studiesfor456@gmail.com",
      college: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    },
    {
      name: "Archana Gurusamy",
      role: "3rd Year, B.Tech Information Technology",
      email: "archanag648@gmail.com",
      college: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-16 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-blue-700 mb-8 text-center"
      >
        Contact <span className="text-indigo-600">Our Team</span>
      </motion.h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <User className="text-blue-600 w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{m.name}</h3>
                <p className="text-gray-600 text-sm">{m.role}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-3">{m.college}</p>

            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
              <Mail size={18} />
              <a href={`mailto:${m.email}`} className="text-sm font-medium">
                {m.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="text-gray-500 text-sm mt-12">
        © 2025 Global Genesis | Crafted with 💙 by Deepika & Archana
      </footer>
    </div>
  );
}
