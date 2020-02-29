import Head from 'next/head'
import { useRouter } from 'next/router'
import FarmerLayout from '../../../../layouts/FarmerLayout'
import { withTranslation, i18n } from '../../../../i18n'
import isFarmerMiddleware from '../../../../../lib/middleware/isFarmerMiddleware'
import ProjectDetail from '../../../../components/Farmer/Project/ProjectDetail'

const UserProfile = ({ token }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <FarmerLayout i18n={i18n}>
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
    </FarmerLayout>
  )
}

UserProfile.getInitialProps = async (context) => {
  const { authInfo, token } = await isFarmerMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(UserProfile)
