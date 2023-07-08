import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="absolute top-0 w-screen flex justify-center items-center p-2">
      <a href="https://www.guilad.me" className="text-accent text-justify badge">Check my Profile✨</a>
    </div>
    <App />
  </React.StrictMode>
)
