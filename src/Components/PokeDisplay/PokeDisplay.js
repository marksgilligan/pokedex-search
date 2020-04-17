import React from "react";
import "./PokeDisplay.css";

function PokeDisplay({ result }) {
  return (
    <div className="pokeContainer">
      <div
        className="pokeDisplay"
        style={
          result.pkdx_id == null
            ? { backgroundColor: `none`, border: `0px` }
            : { backgroundColor: `rgba(219, 219, 219, 0.8)` }
        }
      >
        <img className="pokeImg" src={result.img_url} />

        <h2 className="pokeName">{result.name}</h2>
        <p className="pokeId">
          {result.pkdx_id == null ? "" : `Pokedex ID: `}
          {result.pkdx_id}
        </p>
        <p className="pokeDescription">{result.description}</p>
        <p className="pokeType">
          {result.pkdx_id == null ? "" : `Type(s): `}
          {result.types}
        </p>
        <p className="pokeEvolution">{result.evolutions}</p>
      </div>
    </div>
  );
}

export default PokeDisplay;
