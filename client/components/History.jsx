import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function History() {
  return (
    <div>
      <h1>Battle History</h1>
      <div className="row">
        <div className="col">
          Winners
          <p>Name</p> <p>Points</p>
        </div>
        <div className="col">Losers</div>
      </div>
    </div>
  );
}

export default History;
