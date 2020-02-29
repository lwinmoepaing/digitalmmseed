import Head from 'next/head'
import { useRouter } from 'next/router'
import UserLayout from '../../../../layouts/UserLayout'
import { withTranslation, i18n } from '../../../../i18n'
import isUserMiddleware from '../../../../../lib/middleware/isUserMiddleware'
import ProjectDetail from '../../../../components/Farmer/Project/ProjectDetail'

const UserProfile = ({ token }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <UserLayout i18n={i18n}>
      <Head>
        <title>
          Project Data:
          {id}
        </title>
      </Head>

      <ProjectDetail id={id} token={token} />

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
}

UserProfile.getInitialProps = async (context) => {
  const { authInfo, token } = await isUserMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(UserProfile)
