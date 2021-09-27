import axios from 'axios'
import { watchListActions } from '../slices/watch-list/watchList-slice'

const { WATCHLIST_ADD_ITEM, WATCHLIST_REMOVE_ITEM } = watchListActions

export const addToWatchlist = (id) => {
  return async (dispatch, state) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(
      WATCHLIST_ADD_ITEM({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        issue: data.issue,
        condition: data.condition,
        location: data.location,
      })
    )

    localStorage.setItem(
      'watchListItems',
      JSON.stringify(state().watchList.watchListItems)
    )
  }
}

export const removeFromWatchlist = (id) => {
  return async (dispatch, state) => {
    dispatch(WATCHLIST_REMOVE_ITEM(id))

    localStorage.setItem(
      'watchListItems',
      JSON.stringify(state().watchList.watchListItems)
    )
  }
}
