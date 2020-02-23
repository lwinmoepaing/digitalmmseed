import { BASE_API_URL } from '../../config'

const ErrorPage = () => (
  <div>
    <h4>
      Custom 404 Page
      { BASE_API_URL }
    </h4>
  </div>
)


ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default ErrorPage
