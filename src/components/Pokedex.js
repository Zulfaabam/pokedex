import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Pokedex.css'
import { NavLink } from 'react-router-dom'

export default function Pokedex() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`, {
        params: { limit: 20 },
      })
      .then((res) => {
        return res.data.results
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)))
      })
      .then((results) => {
        setLoading(false)
        setData(results.map((res) => res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  //   console.log(data)

  return (
    <div className="pokedex grid-container" id="pokedex">
      <h1>Pokédex</h1>
      <div className="pokedex-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data.map((pokemon, index) => (
            <div key={index} className="pokedex-box">
              <NavLink to={`/${pokemon.name}`}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </NavLink>
              <p className="pkmn-num">{`#${pokemon.id}`}</p>
              <NavLink to={`/${pokemon.name}`} className="link pkmn-name">
                {pokemon.name}
              </NavLink>
              {/* <p>{item.types[0].type.name}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  )
}