import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userInfo: userInfoFromStorage,
  loading: null,
  error: null,
}

const updateInfoFromStorage = () => {
  return localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
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
      state.userInfo = null
      state.loading = null
      state.error = null
    },
    USER_UPDATE(state, action) {
      state.userInfo = updateInfoFromStorage()
    },
  },
})

export const userLoginActions = userLoginSlice.actions
