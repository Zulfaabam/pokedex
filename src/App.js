import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Pokedex from './components/Pokedex'
import BottomNav from './components/BottomNav'
import Items from './components/Items'
import About from './components/About'
import Pokemon from './components/Pokemon'
import Item from './components/Item'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
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
