/* eslint-disable react/prop-types */
import Head from 'next/head'
import { useRouter } from 'next/router'
import StaffLayout from '../../../../layouts/StaffLayout'
import { withTranslation, i18n } from '../../../../i18n'
import isStaffMiddleware from '../../../../../lib/middleware/isStaffMiddleware'
import Blog from '../../../../components/Common/BlogList/Blog'

const BlogDetail = ({ token, authInfo, t }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <StaffLayout i18n={i18n} t={t}>
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
    </StaffLayout>
  )
}

BlogDetail.getInitialProps = async (context) => {
  const { authInfo, token } = await isStaffMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(BlogDetail)
