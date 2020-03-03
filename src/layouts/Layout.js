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
        <footer className="Footer">
          © Digital MM Farm 2020. All right reserved.

          <a href="tel:+959420059241" style={{ float: 'right' }}> 09420059241 </a>
        </footer>

      </Layout>

      <style jsx>
        {`
				.Footer {
					padding: 1rem;
					background: #dfdfdf;
					font-size: .9em;
				}
			`}

      </style>
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
