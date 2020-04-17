import React, { useState } from "react";
import "./AutoComplete.css";
import Option from "../Option/Option";

function AutoComplete({ searchTerm, setSearchTerm }) {
  const [listOptions, setListOptions] = useState("");

  function handleClick(e) {
    console.log(e);
    setSearchTerm(e.target.innerText);
    setListOptions("");
  }

  return (
    <div>
      <Option
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setListOptions={setListOptions}
        handleClick={handleClick}
      />
      {searchTerm.length > 1 ? listOptions : null}
    </div>
  );
}

export default AutoComplete;
