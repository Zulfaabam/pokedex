import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pokedex from './pages/Pokedex'
import BottomNav from './components/BottomNav'
import Items from './pages/Items'
import About from './pages/About'
import Pokemon from './pages/Pokemon'
import Item from './pages/Item'
// import { createBrowserHistory } from 'history'

// const history = createBrowserHistory()

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:pokemonId" element={<Pokemon />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:itemId" element={<Item />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </Router>
  )
}

export default App
