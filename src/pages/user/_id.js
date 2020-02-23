import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../layouts/Layout'

const UserProfile = () => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <Layout>
      <Head>
        <title>
          User Profile
          {id}
        </title>
      </Head>
      <p>
        User Profile
        {id}
      </p>
    </Layout>
  )
}


export default UserProfile
