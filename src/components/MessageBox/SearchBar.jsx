import React from "react";
import { Menu, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 py-2 bg-white text-[#49454f]">
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Menu className="w-5 h-5 text-gray-500" />
        </span>

        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-500" />
        </span>

        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-10 p-3 bg-[#ece6f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
