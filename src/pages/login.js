import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'


const Login = ({ t }) => (
  <Layout>
    <Head>
      <title> Login Page </title>
    </Head>
    <p>
      Login Page
    </p>
  </Layout>
)

Login.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Login.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Login)
