import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    USER_REGISTER_REQUEST(state, action) {
      state.loading = true
    },
    USER_REGISTER_SUCCESS(state, action) {
      state.loading = false
      state.userInfo = action.payload
    },
    USER_REGISTER_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const userRegisterActions = userRegisterSlice.actions
