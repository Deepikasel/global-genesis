

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✂️ Shorten + clean description
function shortDescription(text, maxLength = 100) {
  if (!text) return "No description available.";
  let clean = text
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[#_*`~]/g, "")
    .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
    .trim();
  if (clean.length > maxLength) clean = clean.substring(0, maxLength).trim() + "…";
  return clean;
}

// 🧩 Project Card
function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition transform"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-blue-700">
          {project.title}
        </h3>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          ⭐ {project.stars ?? 0}
        </span>
      </div>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {shortDescription(project.description, 110)}
      </p>

      <div className="mt-3 text-sm text-gray-500">
        👤 <span className="font-medium">{project.owner || "Unknown"}</span> •{" "}
        <span className="text-blue-600 font-medium">{project.domain}</span>
      </div>

      <div className="mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          🔗 GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🧠 Paste your GitHub token here temporarily
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
// ⚠️ Replace this temporarily

  const domains = [
    { name: "FinTech", query: "fintech+topic:finance" },
    { name: "DeFi", query: "defi+topic:blockchain" },
    { name: "AI Forecasting", query: "forecasting+topic:machine-learning" },
    { name: "Inclusion", query: "financial+inclusion" },
    { name: "Policy Analytics", query: "policy+analytics+data" },
    { name: "Climate Finance", query: "climate+finance+green" },
    { name: "RegTech", query: "regtech+compliance+finance" },
    { name: "InsurTech", query: "insurance+technology+finance" },
    { name: "Green Finance", query: "green+finance+sustainability" },
    { name: "Crypto Governance", query: "crypto+governance+blockchain" },
  ];

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      setError("");
      try {
        const results = await Promise.allSettled(
          domains.map(async (domain) => {
            const res = await fetch(
              `https://api.github.com/search/repositories?q=${domain.query}&sort=stars&order=desc&per_page=5`,
              {
                headers: {
                  Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined,
                  Accept: "application/vnd.github+json",
                },
              }
            );

            if (!res.ok) {
              const msg =
                res.status === 403
                  ? "GitHub rate limit reached. Try adding your token."
                  : `Failed to fetch ${domain.name}`;
              throw new Error(msg);
            }

            const data = await res.json();
            return data.items.map((repo) => ({
              id: repo.id,
              title: repo.name,
              description: repo.description,
              github: repo.html_url,
              domain: domain.name,
              stars: repo.stargazers_count,
              owner: repo.owner?.login,
            }));
          })
        );

        const allProjects = results
          .filter((r) => r.status === "fulfilled")
          .flatMap((r) => r.value);

        setProjects(allProjects);
        setFiltered(allProjects);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    let filteredData = projects;
    if (selectedDomain !== "All") {
      filteredData = filteredData.filter((p) => p.domain === selectedDomain);
    }
    if (searchTerm.trim()) {
      filteredData = filteredData.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFiltered(filteredData);
  }, [selectedDomain, searchTerm, projects]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        🌐 Global Genesis Projects
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore real open-source innovations across finance, AI, blockchain, and more.
      </p>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <option value="All">🌍 All Domains</option>
          {domains.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔎 Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full sm:w-80"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">
          ⏳ Fetching live projects from GitHub...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 font-medium">
          ❌ {error} <br />
          Try again later or check your token.
        </p>
      ) : filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={`${p.domain}-${p.id}`} project={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No matching projects found.</p>
      )}
    </div>
  );
}
