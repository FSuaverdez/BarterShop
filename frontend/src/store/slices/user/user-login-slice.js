import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: { userInfo: userInfoFromStorage },
  reducers: {
    USER_LOGIN_REQUEST(state, action) {
      state.loading = true
    },
    USER_LOGIN_SUCCESS(state, action) {
      state.loading = false
      state.userInfo = action.payload
    },
    USER_LOGIN_FAIL(state, action) {
      state.loading = false
      state.error = action.payload
    },
    USER_LOGOUT(state, action) {
      state = {}
    },
  },
})

export const userLoginActions = userLoginSlice.actions
