import axios from 'axios'
import { userLoginActions } from '../slices/user/user-login-slice'
import { userRegisterActions } from '../slices/user/user-register-slice'
import { userDetailsActions } from '../slices/user/user-details-slice'
import { userUpdateProfileActions } from '../slices/user/user-update-slice'

const { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } =
  userLoginActions

const { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } =
  userRegisterActions

const { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL } =
  userDetailsActions

const {
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_FAIL,
} = userUpdateProfileActions

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(USER_LOGIN_REQUEST())

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )

      dispatch(USER_LOGIN_SUCCESS(data))

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
      dispatch(
        USER_LOGIN_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch(USER_LOGOUT())
  }
}

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(USER_REGISTER_REQUEST())

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/users',
        { name, email, password },
        config
      )

      dispatch(USER_REGISTER_SUCCESS(data))
      dispatch(USER_LOGIN_SUCCESS(data))

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
      dispatch(
        USER_REGISTER_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}

export const getUserDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(USER_DETAILS_REQUEST())

      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(`/api/users/${id}`, config)

      dispatch(USER_DETAILS_SUCCESS(data))
    } catch (err) {
      dispatch(
        USER_DETAILS_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}

export const updateUserProfile = (user) => {
  return async (dispatch, getState) => {
    try {
      dispatch(USER_UPDATE_PROFILE_REQUEST())

      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(`/api/users/profile`, user, config)

      dispatch(USER_UPDATE_PROFILE_SUCCESS(data))
    } catch (err) {
      dispatch(
        USER_UPDATE_PROFILE_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}
