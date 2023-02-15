import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

// so see console logs for this file:
// import './examples/TypeGuardsAndPredicates'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
