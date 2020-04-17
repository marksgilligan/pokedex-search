import React from "react";
import css from "./SearchBar.module.css";
import SearchField from "../SearchField/SearchField";
import SearchButton from "../SearchButton/SearchButton";
//track input in input//

function SearchBar({ searchTerm, setSearchTerm, setResult }) {
  function handleClick() {
    fetch(`http://localhost:5000/pokemon?name=${searchTerm}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return setResult(data[0]);
      })
      .then(setSearchTerm(""));
  }
  return (
    <div className={css.searchForm}>
      <h3>Search Pokemon</h3>
      <SearchField
        handleClick={handleClick}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SearchButton
        handleClick={handleClick}
        searchTerm={searchTerm}
        setResult={setResult}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default SearchBar;
