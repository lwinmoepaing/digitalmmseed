/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserLayout from '../../../layouts/UserLayout'
import isUserMiddleware from '../../../../lib/middleware/isUserMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import RegionSearch from '../../../components/Common/Map/RegionSearch'

const Index = ({ authInfo, token, t }) => (
  <UserLayout i18n={i18n} t={t}>

    <RegionSearch />

    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
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
