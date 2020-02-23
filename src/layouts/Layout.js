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
    background: '#fff',
    minHeight: '100vh',
    width: '100%',
    maxWidth: 1400,
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem',
  },
}

const DefaultLayout = ({ children, router }) => {
  const { Content } = Layout
  return (
    <div className="root">
      <Head>
        <title> Digital MM Farm </title>
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
