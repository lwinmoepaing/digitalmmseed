import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UserLayout from '../../layouts/UserLayout'
import isUserMiddleware from '../../../lib/middleware/isUserMiddleware'
import { withTranslation, i18n } from '../../i18n'
import UserWidgets from '../../components/User/Dashboard/UserWidgets'

const Index = ({ authInfo, token, t }) => (
  <UserLayout i18n={i18n} t={t}>

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
