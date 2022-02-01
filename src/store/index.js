import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemonsSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
})
