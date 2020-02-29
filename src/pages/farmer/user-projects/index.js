import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FarmerLayout from '../../../layouts/FarmerLayout'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../../i18n'
import ProjectListForContact from '../../../components/Farmer/Project/ProjectListForContact'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>
    <div className={`Container ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <h3> Projects From User </h3>
      <ProjectListForContact token={token} authInfo={authInfo} status="Pending" />
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
