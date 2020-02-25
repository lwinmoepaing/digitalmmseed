import PropTypes from 'prop-types'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Layout } from 'antd'
import GuestNavbar from '../components/Common/Navbar/GuestNavbar'

/**
 * Style
 */

const styles = {
  ContentWrapper: {
    minHeight: '100vh',
    width: '100%',
    maxWidth: 1400,
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

const DefaultLayout = ({ children, router, i18n }) => {
  const { Content } = Layout
  return (
    <div className="root">
      <Head>
        <title> Digital MM Farm </title>
      </Head>
      <Layout style={{ marginTop: 52 }}>
        <GuestNavbar Layout={Layout} router={router} i18n={i18n} />
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
  i18n: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default withRouter(DefaultLayout)
