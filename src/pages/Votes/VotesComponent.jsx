import React, { useState } from "react";
import './Votes.css'
function VotesComponent({ title, votes }) {
  const [son, setSon] = useState(votes);
  return (
    <div className="votes-component">
      <h1>{title}</h1>
      <div className="votes">
        <button onClick={() => setSon((p) => p + 1)}>+</button>
        <span>{son}</span>
        <button onClick={() => setSon((p) => p - 1)}>-</button>
      </div>
    </div>
  );
}

export default VotesComponent;
