import React from "react";
import "./OptionsList.css";

function OptionsList({ handleClick, data }) {
  return data.map(x => {
    return (
      <li className="listItem" key={x.pkdx_id} onClick={handleClick}>
        <img className="listImg" src={x.img_url} />
        {x.name}
      </li>
    );
  });
}

export default OptionsList;
