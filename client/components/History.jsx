import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function History() {
  return (
    <div>
      <h1 className="text-center mt-8 text-xl ">Battle History</h1>
      <div className="flex  justify-between">
        <div className="mx-32 mt-10 text-lg">
          Winners
          <p className="text-sm mt-4">
            Name <img src="" alt="" />
          </p>
        </div>
        <div className="mx-32 mt-10 text-lg">Losers</div>
      </div>
    </div>
  );
}

export default History;
