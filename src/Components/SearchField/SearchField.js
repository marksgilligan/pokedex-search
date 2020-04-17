import React from "react";
import "./SearchField.css";
//track input in input//

function SearchField({ searchTerm, setSearchTerm }) {
  function handleChange(eventObject) {
    const newValue = eventObject.target.value;
    setSearchTerm(newValue);
  }

  return (
    <div className="inputField">
      <input
        placeholder="Search Here"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchField;
