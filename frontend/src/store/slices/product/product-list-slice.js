import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    PRODUCT_LIST_REQUEST(state, action) {
      state.loading = true
      state.products = []
    },
    PRODUCT_LIST_SUCCESS(state, action) {
      state.loading = false
      state.products = action.payload
    },
    PRODUCT_LIST_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const productListActions = productListSlice.actions
