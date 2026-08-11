import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Keep the development browser from reusing a stale Tailwind-generated sheet
// after new utility classes are introduced.
import './index.css?v=process-cards-refresh-3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
