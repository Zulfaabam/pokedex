import React from 'react'
import { useParams } from 'react-router'
import './Pokemon.css'
// import { SpinnerCircular } from 'spinners-react'
import { useSelector } from 'react-redux'
import { selectPokemonById } from '../store/pokemons/pokemonsSlice'
import { Link } from 'react-router-dom'

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
  const { pokemonId } = useParams()

  const pokemon = useSelector((state) => selectPokemonById(state, pokemonId))
  // console.log(pokemonsById)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     try {
  //       const response = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  //       )
  //       if (response.status === 200) {
  //         setPokemon(response.data)
  //         setLoading(false)
  //       }
  //     } catch (err) {
  //       setLoading(true)
  //       setError(err)
  //     }
  //   }
  //   fetchData()
  // }, [pokemonId])
  // console.log(pokemonId)
  // console.log(pokemon)

  const pic = `https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`

  if (!pokemon) {
    return (
      <section className="loading">
        <h2>There was an error loading your data!</h2>
        <Link to="/pokedex" className="link">
          Go back to Pokedex
        </Link>
      </section>
    )
  }

  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <SpinnerCircular color="#2769be" />
  //     </div>
  //   )
  // }

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
            {pokemon.types === undefined
              ? 'not found'
              : pokemon.types.map((item, index) => (
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
            {pokemon.abilities === undefined
              ? 'Loading...'
              : pokemon.abilities.map((item, index) => (
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
          {pokemon.stats === undefined
            ? 'Loading...'
            : pokemon.stats.map((item, index) => (
                <p key={index}>
                  <strong>{item.stat.name}: </strong>
                  {item.base_stat}
                </p>
              ))}
        </div>
      </div>
      <div className="data-box moves-wrapper">
        <h2>Moves</h2>
        {pokemon.moves === undefined
          ? 'Loading...'
          : pokemon.moves.map((item, index) => (
              <p key={index}>{item.move.name}</p>
            ))}
      </div>
    </div>
  )
}
