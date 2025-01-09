import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-4 bg-gray-100">
      <input
        type="text"
        placeholder="Search messages"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
