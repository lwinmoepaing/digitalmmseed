import Link from 'next/link'
import PropTypes from 'prop-types'
import Layout from '../../layouts/Layout'

const User = ({ users }) => (
  <Layout>
    <h3> User </h3>
    {users && (
      <ul>
        {users.map((userId) => (
          <li key={userId}>
            <Link
              href={`/user/_id?id=${userId}`}
              as={`/user/${userId}`}
            >
              <a href="#!">
                User
                {userId}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    ) }
  </Layout>
)

User.getInitialProps = async () => {
  const users = await Array.from({ length: 10 }, (_, i) => i + 1)
  return { users, namespacesRequired: ['common'] }
}

User.propTypes = {
  users: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
}

export default User
