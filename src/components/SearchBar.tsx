"use client";

import { useState } from "react";

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="flex justify-center mt-10 space-x-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-3 rounded-xl shadow-lg w-72 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="Enter city name..."
      />
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};
