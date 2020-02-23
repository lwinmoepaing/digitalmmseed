/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import stylesheet from 'antd/dist/antd.css'
import { appWithTranslation } from '../i18n'

const Console = console
Console.log(stylesheet)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
