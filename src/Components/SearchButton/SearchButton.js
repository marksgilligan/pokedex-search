import React from "react";
import "./SearchButton.css";
//track input in input//

function SearchButton({ handleClick }) {
  return (
    <div className="button">
      <button onClick={handleClick}>I Choose You!</button>
    </div>
  );
}

export default SearchButton;
