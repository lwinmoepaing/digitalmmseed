import PropTypes from 'prop-types'

import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'

import HomeSectionOne from '../components/Home/HomeSectionOne'
import HomeSectionTwo from '../components/Home/HomeSectionTwo'
import HomeSectionThree from '../components/Home/HomeSectionThree'
import HomeSectionFarmerProjects from '../components/Home/HomeSectionFarmerProjects'

const Index = ({ t }) => (
  <Layout i18n={i18n}>
    <div className="Container">
      <HomeSectionOne t={t} />
      <HomeSectionTwo />
      <HomeSectionThree t={t} />
      <HomeSectionFarmerProjects />
    </div>

    <style jsx>
      {`
				.Container {
					min-height: 160vh;
				}
			`}
    </style>
  </Layout>
)

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index)
