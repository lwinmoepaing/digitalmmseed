import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UserLayout from '../../layouts/UserLayout'
import isUserMiddleware from '../../../lib/middleware/isUserMiddleware'
import { withTranslation, i18n } from '../../i18n'
import About from '../../components/Common/About/About'

const Index = ({ authInfo, token, t }) => (
  <UserLayout i18n={i18n}>
    <About t={t} />
  </UserLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isUserMiddleware(context)

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
