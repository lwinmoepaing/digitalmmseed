/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FarmerLayout from '../../../layouts/FarmerLayout'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../../i18n'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>

    <div className="Container">
      <h1> User Profile</h1>
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
