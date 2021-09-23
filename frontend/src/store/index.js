import { configureStore } from '@reduxjs/toolkit'
import { watchListSlice } from './slices/cart/watchList-slice'
import { productDetailsSlice } from './slices/product/product-details-slice'
import { productListSlice } from './slices/product/product-list-slice'

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    watchList: watchListSlice.reducer,
  },
})

export default store
