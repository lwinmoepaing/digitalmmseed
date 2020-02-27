import Cookies from 'js-cookie'
// import { parse } from 'cookie'
import {
  LOGIN_FAIL, LOGIN_SENDING, LOGIN_SUCCESS, LOGOUT,
} from '../actions/actionTypes'

const authInfo = Cookies.get('authInfo')
const token = Cookies.get('token')

const initialState = {
  isLoading: false,
  authInfo: authInfo ? JSON.parse(authInfo) : null,
  token: token || null,
  errors: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // If Login Success
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        authInfo: {
          ...payload.authInfo,
        },
        token: payload.token,
        errors: null,
      }

      // Login Sending
    case LOGIN_SENDING:
      return {
        ...state,
        isLoading: true,
      }

      // Login Fail
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: {
          ...payload,
        },
      }
      // Logout
    case LOGOUT:
      return {
        isLoading: false,
        authInfo: null,
        token: null,
        errors: null,
      }
    default:
      return state
  }
}

export default reducer
