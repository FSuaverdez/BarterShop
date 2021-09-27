import axios from 'axios'
import { userLoginActions } from '../slices/user/user-login-slice'

const { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } =
  userLoginActions

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(USER_LOGIN_REQUEST())

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const data = await axios.post('/api/users/login', {
        email,
        password,
        config,
      })

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
