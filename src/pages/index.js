import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'

import HomeSectionOne from '../components/Home/HomeSectionOne'
import HomeSectionTwo from '../components/Home/HomeSectionTwo'
import HomeSectionThree from '../components/Home/HomeSectionThree'
import HomeSectionFarmerProjects from '../components/Home/HomeSectionFarmerProjects'
import HomeWorry from '../components/Home/HomeWorry'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'

const Index = ({ t }) => (
  <Layout i18n={i18n}>
    <div className={`Container ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <HomeSectionOne t={t} />
      <HomeSectionTwo t={t} />
      <HomeSectionThree t={t} />
      <HomeSectionFarmerProjects t={t} />
      <HomeWorry t={t} />
      {/* <CardLoading /> */}
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

Index.getInitialProps = async (context) => {
  await isAuthMiddleware(context)

  return {
    namespacesRequired: ['common'],
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
