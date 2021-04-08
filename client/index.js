import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('app')
  )
})