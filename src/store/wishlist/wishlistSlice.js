import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItem: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const itemId = state.wishlistItem.findIndex(
        (item) => item.id === action.payload.id
      )
      //findIndex will return -1 if there is no element passed the test
      //so if we get >= 0 then there is an element that passed
      if (itemId >= 0) {
        state.wishlistItem[itemId].quantity++
      } else {
        const addedItem = { ...action.payload, quantity: 1 }
        state.wishlistItem.push(addedItem)
      }
    },
    clearWishlist(state, action) {
      state.wishlistItem = []
    },
  },
})

export const { addToWishlist, clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
