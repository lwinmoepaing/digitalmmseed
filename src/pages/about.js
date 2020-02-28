import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'

const About = () => (
  <Layout i18n={i18n}>
    <> About </>
  </Layout>
)

About.getInitialProps = async (context) => {
  await isAuthMiddleware(context)

  return {
    namespacesRequired: ['common'],
  }
}


export default withTranslation('common')(About)
