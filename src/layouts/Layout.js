import PropTypes from 'prop-types'
import Head from 'next/head'
import Router from 'next/router'
import Nprogress from 'nprogress'
import Navbar from '../components/Navbar'

Router.onRouteChangeStart = () => Nprogress.start()

Router.onRouteChangeComplete = () => Nprogress.done()

Router.onRouteChangeError = () => Nprogress.done()

const Layout = ({ children }) => (
  <div className="root">
    <Head>
      <title> Pofolio | Lwin Moe Paing</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
      />

    </Head>
    <Navbar />
    <header> Header </header>
    {children}
    <footer> Footer </footer>

    <style global jsx>
      {`
				.root {
					padding: 1rem;
				}
				header {
					color: red;
				}
				footer {
					color: blue;
				},

				@font-face {
					font-family: 'GTWalsheimProRegular';
					src: url('/fonts/GT-Walsheim-Pro-Regular.eot');
					src: url('/fonts/GT-Walsheim-Pro-Regular.eot?#iefix') format('embedded-opentype'),
							url('/fonts/GT-Walsheim-Pro-Regular.woff2') format('woff2'),
							url('/fonts/GT-Walsheim-Pro-Regular.woff') format('woff'),
							url('/fonts/GT-Walsheim-Pro-Regular.ttf')  format('truetype'),
							url('/fonts/GT-Walsheim-Pro-Regular.svg#GTWalsheimProRegular') format('svg');
				}

				body {
					font-family: 'GTWalsheimProRegular'
				}
			`}
    </style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}


export default Layout
