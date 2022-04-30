import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemonsSlice'
import itemsReducer from './items/itemsSlice'
import wishlistReducer from './wishlist/wishlistSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    items: itemsReducer,
    wishlist: wishlistReducer,
  },
})
