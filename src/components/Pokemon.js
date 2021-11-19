import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Pokemon.css'

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
}

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { pokemonId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        )
        if (response.status === 200) {
          setPokemon(response.data)
          setLoading(false)
        }
      } catch (err) {
        setLoading(true)
        setError(err)
      }
    }

    fetchData()
    // axios
    //   .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //   .then((res) => {
    //     setLoading(false)
    //     setPokemon(res.data)
    //   })
    //   .catch((err) => {
    //     setError(err)
    //   })
  }, [pokemonId])
  // console.log(pokemonId)
  console.log(pokemon)

  const pic = `https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`
  const { types, stats, moves, abilities } = pokemon

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <p>There was an error loading your data!</p>
  }

  return (
    <div className="pokemon grid-container">
      <div className="data-box name-wrapper">
        <h1>{pokemon.name}</h1>
        <img src={pic} alt={`${pokemon.name} pic`} />
      </div>
      <div className="pkmn-data-wrapper">
        <div className="data-box pokedex-data-wrapper">
          <h2>Pokedex Data</h2>
          <div>
            <strong>Type: </strong>
            {types === undefined
              ? 'not found'
              : types.map((item, index) => (
                  <p
                    key={index}
                    style={{
                      backgroundColor: `#${TYPE_COLORS[item.type.name]}`,
                      color: 'white',
                      padding: '.5rem',
                      width: 'fit-content',
                      borderRadius: '5px',
                      display: 'inline-block',
                      marginRight: '.5rem',
                    }}
                  >
                    {item.type.name}
                  </p>
                ))}
          </div>
          <div>
            <strong>Ability: </strong>
            {abilities === undefined
              ? 'not found'
              : abilities.map((item, index) => (
                  <p key={index}>
                    {item.is_hidden
                      ? `${item.ability.name} (Hidden)`
                      : `${item.ability.name},`}
                  </p>
                ))}
          </div>
          <p>
            <strong>Height: </strong>
            {pokemon.height / 10} m
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight / 10} kg
          </p>
        </div>
        <div className="data-box base-stats-wrapper">
          <h2>Base Stats</h2>
          {stats === undefined
            ? 'not found'
            : stats.map((item, index) => (
                <p key={index}>
                  <strong>{item.stat.name}: </strong>
                  {item.base_stat}
                </p>
              ))}
        </div>
      </div>
      <div className="data-box moves-wrapper">
        <h2>Moves</h2>
        {moves === undefined
          ? 'not found'
          : moves.map((item, index) => <p key={index}>{item.move.name}</p>)}
      </div>
    </div>
  )
}
