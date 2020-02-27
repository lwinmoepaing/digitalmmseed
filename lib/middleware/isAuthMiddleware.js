/**
 * Is Auth Middleware
 * @doc : check is jwt and secrety key can decode
 */
import Cookies from 'js-cookie'
import { parse } from 'cookie'


const isAuthMiddleware = (ctx) => {
  let token = null
  let authInfo = null

  if (ctx.isServer) {
    const { req } = ctx
    const cookie = req.headers.cookie || ''
    token = parse(cookie).token || null
    authInfo = parse(cookie).authInfo || null
  } else {
    token = Cookies.get('token')
    authInfo = Cookies.get('authInfo')
  }

  return {
    authInfo,
    token,
    isValid: authInfo && token,
  }
}

export default isAuthMiddleware
