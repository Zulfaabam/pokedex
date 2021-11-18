import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Pokemon.css'

export default function Pokemon() {
  const [data, setData] = useState([])
  const { pokemonId } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        // const { data } = res
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pokemonId])
  console.log(pokemonId)
  console.log(data)

  return (
    <div className="pokemon grid-container">
      <h1>{data.name}</h1>
      {/* <img src={data.sprites.front_default} alt={data.name}></img> */}
      <div className="pkmn-data-wrapper">
        <div className="pokedex-data-wrapper">
          <h2>Pokedex Data</h2>
          {data.types.map((item, index) => (
            <p key={index}>{item.type.name}</p>
          ))}
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          {data.abilities.map((item, index) => (
            <p key={index}>
              {item.is_hidden
                ? `${item.ability.name} (Hidden)`
                : item.ability.name}
            </p>
          ))}
        </div>
        <div className="base-stats-wrapper">
          <h2>Base Stats</h2>
          {data.stats.map((item, index) => (
            <p key={index}>
              {item.stat.name}: {item.base_stat}
            </p>
          ))}
        </div>
        <div className="moves-wrapper">
          <h2>Moves</h2>
          {data.moves.map((item, index) => (
            <p key={index}>{item.move.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
