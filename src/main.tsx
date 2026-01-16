import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app.tsx'
import './style/index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/posterix">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
