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
        const { data } = res
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pokemonId])
  console.log(data)

  return (
    <div className="pkmn-details grid-container">
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name}></img>
      <h2>Pokedex Data</h2>
      <h2>Base Stats</h2>
    </div>
  )
}
