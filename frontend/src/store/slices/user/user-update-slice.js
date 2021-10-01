import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userUpdateProfileSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    USER_UPDATE_PROFILE_REQUEST(state, action) {
      state.loading = true
    },
    USER_UPDATE_PROFILE_SUCCESS(state, action) {
      state.loading = false
      state.userInfo = action.payload
      state.success = true
    },
    USER_UPDATE_PROFILE_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const userUpdateProfileActions = userUpdateProfileSlice.actions
