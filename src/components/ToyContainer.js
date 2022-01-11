import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, updateLikes}) {
  return (
    <div id="toy-collection">{toys.map( (toy)=> <ToyCard toy={toy} key={toy.id} onDelete={onDelete} updateLikes={updateLikes}/> )}</div>
  );
}

export default ToyContainer;
