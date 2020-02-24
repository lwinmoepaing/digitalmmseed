import PropTypes from 'prop-types'

import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'

import HomeSectionOne from '../components/Home/HomeSectionOne'
import HomeSectionTwo from '../components/Home/HomeSectionTwo'
import HomeSectionThree from '../components/Home/HomeSectionThree'
import HomeSectionFarmerProjects from '../components/Home/HomeSectionFarmerProjects'

const Index = ({ t }) => (
  <Layout>
    <div className="Container">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
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
