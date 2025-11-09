import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
