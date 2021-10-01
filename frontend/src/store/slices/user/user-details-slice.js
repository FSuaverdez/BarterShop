import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    USER_DETAILS_REQUEST(state, action) {
      state.loading = true
    },
    USER_DETAILS_SUCCESS(state, action) {
      state.loading = false
      state.user = action.payload
    },
    USER_DETAILS_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const userDetailsActions = userDetailsSlice.actions
