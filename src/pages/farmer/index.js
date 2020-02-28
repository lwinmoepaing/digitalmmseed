import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FarmerLayout from '../../layouts/FarmerLayout'
import isPassAuth from '../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../i18n'
import FarmerWidgets from '../../components/Farmer/Dashboard/FarmerWidgets'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>

    <FarmerWidgets authInfo={authInfo} token={token} />

    <style jsx>
      {`

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
