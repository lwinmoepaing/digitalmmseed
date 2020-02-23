import PropTypes from 'prop-types'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'
import Nprogress from 'nprogress'
import { Layout } from 'antd'
import GuestNavbar from '../components/Common/GuestNavbar'
// import { useState } from 'react'


Router.onRouteChangeStart = () => Nprogress.start()

Router.onRouteChangeComplete = () => Nprogress.done()

Router.onRouteChangeError = () => Nprogress.done()

/**
 * Style
 */

const styles = {
  ContentWrapper: {
    margin: '24px 16px',
    padding: 24,
    background: '#fff',
    minHeight: 280,
  },
}

const DefaultLayout = ({ children, router }) => {
  const { Content } = Layout
  return (
    <div className="root">
      <Head>
        <title> Digital MM Farm</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />

      </Head>
      <Layout>
        <GuestNavbar Layout={Layout} router={router} />
        <Content
          style={styles.ContentWrapper}
        >
          { children }
        </Content>
      </Layout>
    </div>
  )
}


DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  router: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default withRouter(DefaultLayout)
