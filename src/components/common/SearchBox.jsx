import React from "react";

function SearchBox({ value, searchChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => searchChange(e.target.value)}
      placeholder="search by name,email,role"
    />
  );
}

export default SearchBox;
