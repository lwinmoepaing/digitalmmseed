/* eslint-disable react/prop-types */
import Head from 'next/head'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import UserLayout from '../../../layouts/UserLayout'
import { withTranslation, i18n } from '../../../i18n'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import CreateProject from '../../../components/Common/Project/CreateProject'
import { BASE_API_URL } from '../../../../config'

const UserProfile = ({ token, authInfo }) => {
  const router = useRouter()

  return (
    <UserLayout i18n={i18n}>
      <Head>
        <title>
          Create Project Data:
        </title>
      </Head>

      <CreateProject token={token} authInfo={authInfo} redirect="user" />

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
  const { authInfo, token } = await isPassAuth(context)
  const url = `${BASE_API_URL}/api/v1/auth/me`

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  })
  const { data } = await res.json()

  return {
    namespacesRequired: ['common'],
    authInfo: data || authInfo,
    token,
  }
}


export default withTranslation('common')(UserProfile)
