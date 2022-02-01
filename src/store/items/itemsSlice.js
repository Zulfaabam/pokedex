import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

const itemsAdapter = createEntityAdapter()

const initialState = itemsAdapter.getInitialState({
  status: 'idle',
  error: null,
})

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (limit) => {
    const res = await axios
      .get('https://pokeapi.co/api/v2/item', { params: { limit: limit } })
      .then((res) => res.data.results)
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)))
      })
      .then((results) => {
        return results.map((res) => res.data)
      })
    return res
  }
)

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // state.items.push(action.payload)
        itemsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default itemsSlice.reducer

export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
} = itemsAdapter.getSelectors((state) => state.items)
