import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'

import HomeSectionOne from '../components/Home/HomeSectionOne'
import HomeSectionTwo from '../components/Home/HomeSectionTwo'
import HomeSectionThree from '../components/Home/HomeSectionThree'
import HomeSectionFarmerProjects from '../components/Home/HomeSectionFarmerProjects'
import HomeSectionClientProjects from '../components/Home/HomeSectionClientProjects'
import HomeWorry from '../components/Home/HomeWorry'
import HomeSectionBlog from '../components/Home/HomeSectionBlog'
import SupportBy from '../components/Home/SupportBy'
import HomeContact from '../components/Home/HomeContact'

const Index = ({ t }) => (
  <Layout i18n={i18n}>
    <div className={`Container ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <HomeSectionOne t={t} />
      <HomeSectionTwo t={t} />
      <HomeSectionThree t={t} />
      <HomeSectionFarmerProjects t={t} />
      <HomeWorry t={t} />
      <HomeSectionClientProjects t={t} />
      <SupportBy t={t} />
      <HomeSectionBlog t={t} />
      <HomeContact t={t} />
    </div>

    <style jsx>
      {`
				.Container {
					min-height: 160vh;
					background: #fff;
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
