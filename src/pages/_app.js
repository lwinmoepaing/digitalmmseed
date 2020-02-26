/* eslint-disable react/jsx-props-no-spreading */
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Nprogress from 'nprogress'
import configStore from '../../store/configStore'
import { appWithTranslation } from '../i18n'

Router.onRouteChangeStart = () => Nprogress.start()
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(configStore, { debug: process.NODE_ENV !== 'production' })(appWithTranslation(MyApp))
