import Head from 'next/head'
import { connect } from 'react-redux'
import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'
import { onSubmitAuth } from '../../store/actions/authAction'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'
import RegisterProfile from '../components/Common/Profile/ResisterProfile'


const Register = ({ t }) => (
  <Layout i18n={i18n}>
    <Head>
      <title> Register Page </title>
    </Head>
    <div className="Container">
      <RegisterProfile type="Guest" t={t} />
    </div>
    <style jsx>
      {`
				.Container {
					overflow: hidden;
					max-width: 400px;
					margin: 1rem auto;
				}
			`}
    </style>
  </Layout>
)


Register.getInitialProps = async (ctx) => {
  // const Console = console
  const { isValid, authInfo } = await isAuthMiddleware(ctx)
  // Console.log('is Valid', isValid)
  const payLoad = {
    Auth: isValid === true ? JSON.parse(JSON.stringify(authInfo)) : null,
  }
  return ({
    namespacesRequired: ['common'],
    ...payLoad,
  })
}

export default connect((state) => state, { onSubmitAuth })(withTranslation('common')(Register))
