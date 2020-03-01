import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AdminLayout from '../../layouts/AdminLayout'
import isAdminMiddleware from '../../../lib/middleware/isAdminMiddleware'
import { withTranslation, i18n } from '../../i18n'
import About from '../../components/Common/About/About'

const Index = ({ authInfo, token, t }) => (
  <AdminLayout i18n={i18n}>
    <About t={t} />
  </AdminLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isAdminMiddleware(context)

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
