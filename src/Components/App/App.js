import React, { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import AutoComplete from "../AutoComplete/AutoComplete";
import PokeDisplay from "../PokeDisplay/PokeDisplay";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <Header />
      <aside className="searchContainer">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setResult={setResult}
        />

        <ul className="listContainer">
          <AutoComplete searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </ul>
      </aside>
      <PokeDisplay result={result} />
    </>
  );
}

export default App;
