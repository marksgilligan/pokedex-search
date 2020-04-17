import React, { useEffect } from "react";
import "./Option.css";
import OptionsList from "../OptionsList/OptionsList";

function Option({ searchTerm, setListOptions, handleClick }) {
  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?name=${searchTerm}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return setListOptions(
          <OptionsList data={data} handleClick={handleClick} />
        );
      });
  }, [searchTerm]);

  return null;
}

export default Option;
