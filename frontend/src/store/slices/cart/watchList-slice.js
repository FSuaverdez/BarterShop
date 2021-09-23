import { createSlice } from '@reduxjs/toolkit'

const watchListItemsFromStorage = localStorage.getItem('watchListItems')
  ? JSON.parse(localStorage.getItem('watchListItems'))
  : []

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState: {
    watchListItems: watchListItemsFromStorage,
  },
  reducers: {
    WATCHLIST_ADD_ITEM(state, action) {
      const item = action.payload

      const existItem = state.watchListItems.find(
        (x) => x.product === item.product
      )

      if (!existItem) {
        state.watchListItems = [...state.watchListItems, item]
      }
    },
    WATCHLIST_REMOVE_ITEM(state, action) {
      state.watchListItems = state.watchListItems.filter(
        (x) => x.product !== action.payload
      )
    },
  },
})

export const watchListActions = watchListSlice.actions
