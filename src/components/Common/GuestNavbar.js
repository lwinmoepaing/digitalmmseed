import { Menu } from 'antd'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link } from '../../i18n'


const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Login', url: '/login' },
]

const styles = {
  LayoutHeader: { padding: 0, height: '50px', float: 'right' },
  MenuLineHeight: { lineHeight: '50px' },
}

const GuestNavbar = ({ Layout, router }) => {
  const [state, setstate] = useState(router.pathname)

  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  return (
    <Layout.Header style={styles.LayoutHeader}>
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
                {link.name}
              </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
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
