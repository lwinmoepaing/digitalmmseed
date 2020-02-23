import { Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link } from '../../../i18n'

const links = [
  { name: 'Home', url: '/', icon: 'home' },
  { name: 'About', url: '/about', icon: 'read' },
  { name: 'Login', url: '/login', icon: 'login' },
]

const styles = {
  LayoutHeader: { padding: 0, height: '50px', backgroundColor: '#fff' },
  MenuLineHeight: { lineHeight: '50px', textAlign: 'right', paddingRight: '1.5rem' },
}

const GuestNavbar = ({ Layout, router }) => {
  const [state, setstate] = useState(router.pathname)

  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  return (
    <Layout.Header style={styles.LayoutHeader}>
      <div className="Container">
        <div className="logo">
          <h3> Digital MM Farm </h3>
        </div>

        <div className="MenuContainer">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[state]}
            style={styles.MenuLineHeight}
          >
            {links.map((link) => (
              <Menu.Item key={link.url}>
                <Link href={link.url}>
                  <a href="#!">
                    <Icon type={link.icon} />
                    {link.name}
                  </a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>

        <div className="RightNavigator">
          {/*  */}
        </div>
      </div>
      <style jsx>
        {`
					.logo {
						height: 51px;
						line-height: 51px;
						display: inline-block;
						float: left;
						padding-left: .5rem;
					}
					.Container {
						max-width: 1400px;
						margin: 0 auto;
					}
					.MenuContainer {
						display: none !important;
						color: red;
					}
					@media screen and (min-width: 600px) {
						.MenuContainer {
							display: block !important;
						}
					}
				`}
      </style>
    </Layout.Header>
  )
}

GuestNavbar.propTypes = {
  Layout: PropTypes.func.isRequired,
  router: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default GuestNavbar
