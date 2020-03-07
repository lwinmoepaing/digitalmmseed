/* eslint-disable react/prop-types */
import Head from 'next/head'
import { useRouter } from 'next/router'
import UserLayout from '../../../../layouts/UserLayout'
import { withTranslation, i18n } from '../../../../i18n'
import isUserMiddleware from '../../../../../lib/middleware/isUserMiddleware'
import Blog from '../../../../components/Common/BlogList/Blog'

const BlogDetail = ({ token, authInfo }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <UserLayout i18n={i18n}>
      <Head>
        <title>
          Blog Data:
        </title>
      </Head>


      <div>
        <Blog id={id} token={token} authInfo={authInfo} />
      </div>

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

BlogDetail.getInitialProps = async (context) => {
  const { authInfo, token } = await isUserMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(BlogDetail)
