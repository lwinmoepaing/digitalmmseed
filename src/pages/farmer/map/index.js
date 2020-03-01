
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegionSearch from '../../../components/Common/Map/RegionSearch'
import FarmerLayout from '../../../layouts/FarmerLayout'
import isFarmerMiddleware from '../../../../lib/middleware/isFarmerMiddleware'
import { withTranslation, i18n } from '../../../i18n'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>

    <RegionSearch />

    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
				}
			`}
    </style>
  </FarmerLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isFarmerMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
