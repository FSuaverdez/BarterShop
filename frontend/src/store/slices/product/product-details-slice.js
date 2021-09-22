import { createSlice } from '@reduxjs/toolkit'

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: {},
    loading: false,
    error: null,
  },
  reducers: {
    PRODUCT_DETAILS_REQUEST(state, action) {
      state.loading = true
    },
    PRODUCT_DETAILS_SUCCESS(state, action) {
      state.loading = false
      state.product = action.payload
    },
    PRODUCT_DETAILS_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const productDetailsActions = productDetailsSlice.actions
