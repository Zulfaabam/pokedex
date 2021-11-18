import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Pokedex from './components/Pokedex'
import BottomNav from './components/BottomNav'
import Items from './components/Items'
import About from './components/About'
import Details from './components/Details'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/path" />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/items" element={<Items />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </Router>
  )
}

export default App
