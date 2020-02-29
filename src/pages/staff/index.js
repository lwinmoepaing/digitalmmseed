import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StaffLayout from '../../layouts/StaffLayout'
import isStaffMiddleware from '../../../lib/middleware/isStaffMiddleware'
import { withTranslation, i18n } from '../../i18n'
import UserWidgets from '../../components/User/Dashboard/UserWidgets'

const Index = ({ authInfo, token, t }) => (
  <StaffLayout i18n={i18n}>

    <div className="Container">

      <h3 className="font-en"> Welcome To Digital Myanmar Farm </h3>

      <UserWidgets authInfo={authInfo} token={token} />

      <style jsx>
        {`
					.Container {
							background: #fff;
							border-radius: 1rem;
							padding: 1rem;
					}
				`}
      </style>
    </div>
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
