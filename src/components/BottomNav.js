import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgHome, CgPokemon, CgProfile } from 'react-icons/cg'
import { TiShoppingBag } from 'react-icons/ti'
import './BottomNav.css'

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        <CgHome className="icon" />
        Home
      </NavLink>
      <NavLink to="/pokedex" className="link nav-link">
        <CgPokemon className="icon" />
        Pokedex
      </NavLink>
      <NavLink to="/items" className="link nav-link">
        <TiShoppingBag className="icon" />
        Items
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        <CgProfile className="icon" />
        About
      </NavLink>
    </div>
  )
}
