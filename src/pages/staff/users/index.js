import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StaffLayout from '../../../layouts/StaffLayout'
import isStaffMiddleware from '../../../../lib/middleware/isStaffMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import RegisterProfile from '../../../components/Common/Profile/ResisterProfile'

const UserPage = ({ authInfo, token, t }) => (
  <StaffLayout i18n={i18n}>

    <RegisterProfile t={t} />

    <style jsx>
      {`
				.Container {
						background: #fff;
						border-radius: 1rem;
						padding: 1rem;
				}
			`}
    </style>
  </StaffLayout>
)

UserPage.getInitialProps = async (context) => {
  const { authInfo, token } = await isStaffMiddleware(context)

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
