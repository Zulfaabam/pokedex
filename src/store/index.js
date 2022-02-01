import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemonsSlice'
import itemsReducer from './items/itemsSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    items: itemsReducer,
  },
})
