import fetch from 'isomorphic-unfetch'
import { LOGIN_FAIL, LOGIN_SENDING, LOGIN_SUCCESS } from './actionTypes'
import { BASE_API_URL } from '../../config'

export const loginSending = () => ({
  type: LOGIN_SENDING,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: {
    name: 'Lwin Moe Paing',
    email: 'lwinmoepaing@gmail.com',
  },
})

export const loginFail = (e) => ({
  type: LOGIN_FAIL,
  payload: {
    message: e.message,
  },
})

// ===========================
// Async Thunk Example
// ===========================

export const onSubmitAuth = (email = '', password = '') => async (dispatch) => {
  const Console = console
  Console.log(email, password)
  // dispath Sending First
  dispatch(loginSending())
  try {
    const response = await fetch(BASE_API_URL, {})
    if (!response.ok) throw new Error('Message')
    const data = await response.json()
    if (data.auth) {
      dispatch(loginSuccess())
      return
    }
  } catch (e) {
    throw new Error('Login Fail')
  }
}
