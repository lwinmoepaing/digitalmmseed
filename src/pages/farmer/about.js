import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FarmerLayout from '../../layouts/FarmerLayout'
import isFarmerMiddleware from '../../../lib/middleware/isFarmerMiddleware'
import { withTranslation, i18n } from '../../i18n'
import About from '../../components/Common/About/About'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n} t={t}>

    <div className="">
      <About t={t} />
    </div>
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
