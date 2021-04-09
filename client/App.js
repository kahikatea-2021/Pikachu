//import './tailwind.css'
import { Route } from "react-router-dom";
import PokemonHeader from "./components/PokemonHeader";
import Home from "./components/Home";
import Battle from "./components/Battle";
import History from "./components/History";

import React from "react";

function App() {
  return (
    <>
      <PokemonHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/Battle" component={Battle} />
    </>
  );
}

export default App;
