import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon(props) {
  const [data, setData] = useState([])
  const { match } = props
  const { params } = match
  const { pokemonId } = params

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
    <div className="pkmn-details">
      <div>{data.name}</div>
    </div>
  )
}
