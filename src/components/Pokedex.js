import React, { useEffect, useState } from 'react'
import './Pokedex.css'
import { NavLink } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllPokemons,
  fetchPokemons,
} from '../store/pokemons/pokemonsSlice'

export default function Pokedex() {
  // const { history } = props
  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()
  const pokemons = useSelector(selectAllPokemons)
  const pokemonStatus = useSelector((state) => state.pokemons.status)
  const error = useSelector((state) => state.pokemons.error)

  useEffect(() => {
    if (pokemonStatus === 'idle') {
      dispatch(fetchPokemons(10))
    }
  }, [pokemonStatus, dispatch])

  // useEffect(() => {
  //   setLoading(true)
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/`, {
  //       params: { limit: 151 },
  //     })
  //     .then((res) => {
  //       return res.data.results
  //     })
  //     .then((results) => {
  //       return Promise.all(results.map((res) => axios.get(res.url)))
  //     })
  //     .then((results) => {
  //       setLoading(false)
  //       setPokemon(results.map((res) => res.data))
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }

  let pokedex
  if (pokemonStatus === 'loading') {
    pokedex = (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    )
  } else if (pokemonStatus === 'succeeded') {
    pokedex = pokemons.map(
      (pokemon) =>
        pokemon.name.includes(filter) && (
          <div key={pokemon.id} className="pokedex-box">
            <NavLink
              to={`/pokedex/${pokemon.id}`}
              // onClick={() => history.push(`/pokedex/${pokemon.id}`)}
            >
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </NavLink>
            <p className="pkmn-num">{`#${pokemon.id}`}</p>
            <NavLink
              to={`/pokedex/${pokemon.id}`}
              className="link pkmn-name"
              // onClick={() => history.push(`/pokedex/${pokemon.id}`)}
            >
              {pokemon.name}
            </NavLink>
          </div>
        )
    )
  } else if (pokemonStatus === 'failed') {
    pokedex = <div>{error}</div>
  }

  return (
    <div className="pokedex grid-container" id="pokedex">
      <header className="header">
        <h1>Pokédex</h1>
        <input
          type="text"
          name="filter"
          placeholder="Filter Pokemon"
          onChange={handleSearchChange}
        />
      </header>
      <div className="pokedex-container">{pokedex}</div>
    </div>
  )
}
