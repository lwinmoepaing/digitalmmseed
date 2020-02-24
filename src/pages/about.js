import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'

const About = () => (
  <Layout i18n={i18n}>
    <> About </>
  </Layout>
)

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(About)
