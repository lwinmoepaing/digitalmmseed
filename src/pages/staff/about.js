import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StaffLayout from '../../layouts/StaffLayout'
import isStaffMiddleware from '../../../lib/middleware/isStaffMiddleware'
import { withTranslation, i18n } from '../../i18n'
import About from '../../components/Common/About/About'

const Index = ({ authInfo, token, t }) => (
  <StaffLayout i18n={i18n}>
    <About t={t} />
  </StaffLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isStaffMiddleware(context)

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
