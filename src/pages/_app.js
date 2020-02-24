/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Nprogress from 'nprogress'
import { appWithTranslation } from '../i18n'
import 'react-multi-carousel/lib/styles.css'


Router.onRouteChangeStart = () => Nprogress.start()
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
