import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UserLayout from '../../../layouts/UserLayout'
import isUserMiddleware from '../../../../lib/middleware/isUserMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import ProjectListForContact from '../../../components/User/Project/ProjectListForContact'

const Index = ({ authInfo, token, t }) => (
  <UserLayout i18n={i18n}>
    <div className={`Container ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <h3> Projects From Farmers </h3>
      <ProjectListForContact from="farmer" token={token} authInfo={authInfo} status="Pending" />
    </div>

    <style jsx>
      {`
				.Container {
					background: #ffffff;
					padding: 1rem;
					border-radius: 1rem;
				}
			`}
    </style>
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
