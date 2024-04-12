import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex w-2/4 items-center space-x-3 mx-auto mt-5 relative">
      <input
        className="pl-8 rounded-3xl w-full py-3"
        placeholder={searchTerm ? "" : "Search by keyword"}
        type="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <div className="absolute inset-y-3.5 right-10 flex items-end mr-5">
          <span className="text-gray-800 text-sm">{searchTerm.length}/60</span>
        </div>
      )}
      <button
        className="absolute inset-y-0 left-0 rounded-r-none"
        type="button"
        variant="subtle"
      >
        <BiSearch className="h-5 w-5" />
      </button>
    </div>
  );
}
