import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AdminLayout from '../../../layouts/AdminLayout'
import isAdminMiddleware from '../../../../lib/middleware/isAdminMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import RegisterProfile from '../../../components/Common/Profile/ResisterProfile'

const UserPage = ({ authInfo, token, t }) => (
  <AdminLayout i18n={i18n}>

    <RegisterProfile type="Admin" t={t} />

    <style jsx>
      {`
				.Container {
						background: #fff;
						border-radius: 1rem;
						padding: 1rem;
				}
			`}
    </style>
  </AdminLayout>
)

UserPage.getInitialProps = async (context) => {
  const { authInfo, token } = await isAdminMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

UserPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(UserPage))
