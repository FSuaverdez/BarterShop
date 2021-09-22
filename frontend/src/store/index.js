import { configureStore } from '@reduxjs/toolkit'
import { productDetailsSlice } from './slices/product/product-details-slice'
import { productListSlice } from './slices/product/product-list-slice'

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
  },
})

export default store
