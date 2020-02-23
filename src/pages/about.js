import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'

const About = () => (
  <Layout>
    <> About </>
  </Layout>
)

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(About)
