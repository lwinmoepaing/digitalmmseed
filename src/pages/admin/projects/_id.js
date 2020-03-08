import Head from 'next/head'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/AdminLayout'
import { withTranslation, i18n } from '../../../i18n'
import isAdminMiddleware from '../../../../lib/middleware/isAdminMiddleware'
import ContactDetail from '../../../components/Staff/Project/ContactDetail'

const UserProfile = ({ token, authInfo, t }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <AdminLayout i18n={i18n} t={t}>
      <Head>
        <title>
          Project Data:
          {id}
        </title>
      </Head>

      <ContactDetail id={id} token={token} authInfo={authInfo} />

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

UserProfile.getInitialProps = async (context) => {
  const { authInfo, token } = await isAdminMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(UserProfile)
