import PropTypes from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import Layout from '../layouts/Layout'
import LoginForm from '../components/Common/LoginForm/LoginForm'
import { withTranslation, i18n } from '../i18n'
import { onSubmitAuth } from '../../store/actions/authAction'


const Login = (props) => {
  const Console = console
  Console.log('In Login Component', props)
  const { t, Auth, onSubmitAuth: onSubmitLogin } = props
  return (
    <Layout i18n={i18n}>
      <Head>
        <title> Login Page </title>
      </Head>
      <div>
        <LoginForm
          t={t}
          onSubmitAuth={onSubmitLogin}
          Auth={Auth}
        />
      </div>
    </Layout>
  )
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
  onSubmitAuth: PropTypes.func.isRequired,
  Auth: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
}

Login.getInitialProps = async ({ store }) => {
  const { Auth } = store.getState()
  const payLoad = {
    Auth,
  }
  const Console = console
  Console.log('payLoad', payLoad)
  return ({
    namespacesRequired: ['common'],
    ...payLoad,
  })
}

export default connect((state) => state, { onSubmitAuth })(withTranslation('common')(Login))
