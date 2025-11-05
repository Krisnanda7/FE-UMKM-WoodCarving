"use client";

import { useState } from "react";

const categories = [
  "Uncategorized",
  "Abstract",
  "Animal",
  "Balinese Statue",
  "Buddha",
  "Cross Medallions",
  "Dragon",
  "Hand",
  "Hindu God",
  "Kitchen Set",
  "Mask",
  "Medallions",
  "Mushroom",
  "Statue Tiki",
  "Tableware",
  "Wedding Give",
  "Wooden Panel",
];

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
}: any) {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-full md:w-1/4 p-4 border-r border-gray-200">
      {/* Filter by Price */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg mb-4">Filter by price</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Price: Rp0 - Rp16.500.000</span>
        </div>
        {/* Slider dummy (belum fungsional) */}
        <div className="h-1 bg-gray-300 mt-3 rounded-full relative">
          <div className="absolute left-0 right-1/3 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Filter by Category */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Filter by category</h3>
        <input
          type="text"
          placeholder="Find by Category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {filteredCategories.map((cat) => (
            <label
              key={cat}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onCategoryChange(cat)}
                className="accent-orange-600"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
