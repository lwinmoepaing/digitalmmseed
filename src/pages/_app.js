/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import 'antd/dist/antd.min.css'
import { appWithTranslation } from '../i18n'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
