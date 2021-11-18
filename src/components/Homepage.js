import React from 'react'
import './Homepage.css'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="home" id="home">
      <header>
        <img src="/pokeball192.png" alt="pokeball" className="app-logo" />
        <h1 className="title">Pokédex</h1>
      </header>
      <div className="menu-container">
        <div className="menu-box">
          <NavLink to="/pokedex" className="link app-link">
            Pokédex
          </NavLink>
        </div>
        <div className="menu-box">
          <NavLink to="/items" className="link app-link">
            Items
          </NavLink>
        </div>
        <div className="menu-box">
          <NavLink to="/about" className="link app-link">
            About
          </NavLink>
        </div>
      </div>
    </div>
  )
}
