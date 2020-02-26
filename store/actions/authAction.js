import fetch from 'isomorphic-unfetch'
import { LOGIN_FAIL, LOGIN_SENDING, LOGIN_SUCCESS } from './actionTypes'
import { BASE_API_URL } from '../../config'

export const loginSending = () => ({
  type: LOGIN_SENDING,
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
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
  // eslint-disable-next-line no-alert
  const Console = console
  Console.log(email, password)
  // dispath Sending First
  dispatch(loginSending())
  try {
    const response = await fetch(`${BASE_API_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (!response.ok) throw response
    const data = await response.json()
    const payload = {
      authInfo: data.data,
      token: data.token,
    }
    dispatch(loginSuccess(payload))
    return payload
  } catch (e) {
    dispatch(loginFail(e))
    throw e
  }
}
