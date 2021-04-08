import './tailwind.css'
import { Route } from 'react-router-dom'
import PokemonHeader from './client/components/PokemonHeader'
import Home from './client/components/Home'
import Battle from './client/components/Battle'

import React from 'react'

function App () {
  return (
    <>
    < PokemonHeader />
        <Route exact path = '/' component={Home}/>
        <Route exact path ='/Battle' component={Battle} />
    </>
  )
}

export default App