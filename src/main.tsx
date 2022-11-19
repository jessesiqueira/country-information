import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.ts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './pages/Info'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info/:ccn3" element={<Info />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
