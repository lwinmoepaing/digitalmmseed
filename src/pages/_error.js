import Error404 from '../components/Common/SVG/Error404'

const ErrorPage = () => (
  <div>
    <div className="Container">
      <Error404 />
      <h3 className=""> Digital Mm Farm 404 Not Found </h3>
      <a href="/"> Go Home </a>
    </div>

    <style jsx>
      {`
			.Container {
				width: 300px;
				margin: 0 auto;
				margin-top: 3rem;
				text-align: center;
				color: green;
			}
		`}
    </style>
  </div>
)


ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default ErrorPage
