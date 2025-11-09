import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition transform"
    >
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
        {project.domain}
      </span>
      <div className="mt-4 flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          🔗 GitHub
        </a>
        {project.journal && (
          <a
            href={project.journal}
            target="_blank"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            📚 Journal
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
