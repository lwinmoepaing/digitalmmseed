/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminLayout from '../../../layouts/AdminLayout'
import isAdminMiddleware from '../../../../lib/middleware/isAdminMiddleware'
import BlogList from '../../../components/Common/BlogList/BlogList'
import { withTranslation, i18n } from '../../../i18n'

const FarmerCreateBlog = ({ authInfo, token, t }) => (
  <AdminLayout i18n={i18n} t={t}>

    <div className="Container">
      <p>
        Blog List
      </p>
      <BlogList authInfo={authInfo} token={token} />
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
  </AdminLayout>
)

FarmerCreateBlog.getInitialProps = async (context) => {
  const { authInfo, token } = await isAdminMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

FarmerCreateBlog.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(FarmerCreateBlog))
