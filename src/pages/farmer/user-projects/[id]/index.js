import Head from 'next/head'
import { useRouter } from 'next/router'
import FarmerLayout from '../../../../layouts/FarmerLayout'
import { withTranslation, i18n } from '../../../../i18n'
import isFarmerMiddleware from '../../../../../lib/middleware/isFarmerMiddleware'
import ContactDetail from '../../../../components/Farmer/Project/ContactDetail'

const UserProfile = ({ token, authInfo }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <FarmerLayout i18n={i18n} t={t}>
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
