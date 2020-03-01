/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminLayout from '../../../layouts/AdminLayout'
import isAdminMiddleware from '../../../../lib/middleware/isAdminMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import UserProfile from '../../../components/Common/Profile/UserProfile'

const Index = ({ authInfo, token, t }) => (
  <AdminLayout i18n={i18n}>

    <UserProfile token={token} />

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
