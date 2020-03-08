/* eslint-disable react/prop-types */
import Head from 'next/head'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/AdminLayout'
import { withTranslation, i18n } from '../../../i18n'
import isAdminMiddleware from '../../../../lib/middleware/isAdminMiddleware'
import Blog from '../../../components/Common/BlogList/Blog'

const BlogDetail = ({ token, authInfo }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <AdminLayout i18n={i18n} t={t}>
      <Head>
        <title>
          Blog Data:
        </title>
      </Head>

      <Blog id={id} token={token} authInfo={authInfo} />

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
}

BlogDetail.getInitialProps = async (context) => {
  const { authInfo, token } = await isAdminMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(BlogDetail)
