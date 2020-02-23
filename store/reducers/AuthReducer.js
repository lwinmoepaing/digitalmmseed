import { LOGIN_FAIL, LOGIN_SENDING, LOGIN_SUCCESS } from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  authInfo: null,
  errors: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // If Login Success
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        authInfo: {
          ...payload,
        },
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
    default:
      return state
  }
}

export default reducer
