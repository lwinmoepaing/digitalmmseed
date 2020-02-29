/**
 * Is Auth Middleware
 * @doc : check is jwt and secrety key can decode
 */
import Cookies from 'js-cookie'
import { parse } from 'cookie'
import Router from 'next/router'

const isParseAuth = (ctx) => {
  let token = null
  let authInfo = null

  if (ctx.isServer) {
    const { req } = ctx
    const cookie = req.headers.cookie || ''
    token = parse(cookie).token || null
    authInfo = parse(cookie).authInfo ? JSON.parse(parse(cookie).authInfo) : null
  } else {
    token = Cookies.get('token') || null
    authInfo = Cookies.get('authInfo') ? JSON.parse(Cookies.get('authInfo')) : null
  }

  const isValid = authInfo && token && authInfo.role === 'User'

  if (!isValid) {
    const redirect = '/'
    if (!ctx.isServer) {
      Router.push(redirect)
    } else {
      ctx.res.redirect(redirect)
    }
  }

  return {
    authInfo,
    token,
    isValid,
  }
}

export default isParseAuth
