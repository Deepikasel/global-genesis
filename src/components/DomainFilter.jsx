import React from "react";

function DomainFilter({ selectedDomain, setSelectedDomain }) {
  const domains = ["All", "FinTech", "DeFi", "AI Forecasting", "Inclusion", "Policy Analytics"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {domains.map((d) => (
        <button
          key={d}
          onClick={() => setSelectedDomain(d)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            selectedDomain === d
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-blue-100"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

export default DomainFilter;
