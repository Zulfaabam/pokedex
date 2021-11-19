import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Pokemon.css'

// const TYPE_COLORS = {
//   bug: 'B1C12E',
//   dark: '4F3A2D',
//   dragon: '755EDF',
//   electric: 'FCBC17',
//   fairy: 'F4B1F4',
//   fighting: '823551D',
//   fire: 'E73B0C',
//   flying: 'A3B3F7',
//   ghost: '6060B2',
//   grass: '74C236',
//   ground: 'D3B357',
//   ice: 'A3E7FD',
//   normal: 'C8C4BC',
//   poison: '934594',
//   psychic: 'ED4882',
//   rock: 'B9A156',
//   steel: 'B5B5C3',
//   water: '3295F6',
// }

export default function Pokemon() {
  const [pokemon, setPokemon] = useState('')
  const [loading, setLoading] = useState(false)
  const { pokemonId } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        setLoading(false)
        setPokemon(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pokemonId])
  // console.log(pokemonId)
  // console.log(pokemon)

  // const pic = pokemon.sprites.front_default

  return (
    <div className="pokemon grid-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="pkmn-data-wrapper">
          <div className="data-box name-wrapper">
            <h1>{pokemon.name}</h1>
            {/* <img src={pic} alt={`${pokemon.name} pic`} /> */}
          </div>
          <div className="data-box pokedex-data-wrapper">
            <h2>Pokedex Data</h2>
            {pokemon.types.map((item, index) => (
              <p key={index}>{item.type.name}</p>
            ))}
            {pokemon.abilities.map((item, index) => (
              <p key={index}>
                {item.is_hidden
                  ? `${item.ability.name} (Hidden)`
                  : item.ability.name}
              </p>
            ))}
            <p>Base Exp: {pokemon.base_experience}</p>
            <p>{`Height: ${pokemon.height / 10} m`}</p>
            <p>{`Weight: ${pokemon.weight / 10} kg`}</p>
          </div>
          <div className="data-box base-stats-wrapper">
            <h2>Base Stats</h2>
            {pokemon.stats.map((item, index) => (
              <p key={index}>
                {item.stat.name}: {item.base_stat}
              </p>
            ))}
          </div>
          <div className="data-box moves-wrapper">
            <h2>Moves</h2>
            {pokemon.moves.map((item, index) => (
              <p key={index}>{item.move.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
