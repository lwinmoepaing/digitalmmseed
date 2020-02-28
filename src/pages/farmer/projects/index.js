/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FarmerLayout from '../../../layouts/FarmerLayout'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../../i18n'
import AllProjectsForFarmer from '../../../components/Farmer/Project/AllProjects'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>

    <div className="Container">
      <AllProjectsForFarmer token={token} authInfo={authInfo} />
    </div>

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
  const { authInfo, token } = await isPassAuth(context)

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
