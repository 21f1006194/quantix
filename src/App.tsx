import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuantixLanding from './components/QuantixLanding'
import JoinCoreTeam from './components/JoinCoreTeam'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuantixLanding />} />
        <Route path="/join-core-team" element={<JoinCoreTeam />} />
      </Routes>
    </Router>
  )
}

export default App
