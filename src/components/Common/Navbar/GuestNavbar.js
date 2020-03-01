/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Menu, Radio } from 'antd'
import PropTypes from 'prop-types'
import { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import {
  HomeOutlined,
  ReadOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Link, withTranslation } from '../../../i18n'
import { logout } from '../../../../store/actions/authAction'

const links = [
  { name: 'Home', url: '/', icon: HomeOutlined },
  { name: 'About', url: '/about', icon: ReadOutlined },
]

const styles = {
  LayoutHeader: {
    padding: 0,
    height: '50px',
    backgroundColor: '#fff',
    position: 'fixed',
    width: '100%',
    zIndex: '1001',
    top: 0,
    borderBottom: '1px solid #dfdfdf',
  },
  MenuLineHeight: { lineHeight: '50px', textAlign: 'right', paddingRight: '1.5rem' },
}

const GuestNavbar = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    Layout, router, i18n, t, Auth, logout: onLogout,
  } = props

  // const Console = console
  // Console.log('Inside Nav', props)

  const [state, setstate] = useState(router.pathname)
  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  const changeLocale = ({ target: { value } }) => {
    if (!i18n.language) {
      return false
    }
    return i18n.changeLanguage(value)
  }


  return (
    <Layout.Header style={styles.LayoutHeader}>
      <div className="Container">
        <div className="logo">
          <Link href="/">
            <h3 style={{ color: '#52c41a' }}>
              Digital MM Farm
            </h3>
          </Link>
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
                    <link.icon />

                    {t(link.name)}

                  </a>
                </Link>
              </Menu.Item>
            ))}
            { Auth && Auth.token ? (
              <Menu.Item>
                <Link href="#!">
                  <a href="#!" onClick={() => onLogout()}>

                    <LogoutOutlined />
                    {t('logout')}

                  </a>
                </Link>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link href="/login">
                  <a href="#!">
                    <LoginOutlined />
                    {t('Login')}
                  </a>
                </Link>
              </Menu.Item>
            ) }
            <Menu.Item style={{ border: 'none' }}>
              <div>
                <Radio.Group defaultValue={i18n.language || 'mm'} onChange={changeLocale} buttonStyle="solid" size="small">
                  <Radio.Button key="en" value="en">
                    <img style={{ width: 25, height: 15 }} src="/svg/en.svg" alt="enimage" />
                  </Radio.Button>
                  <Radio.Button key="cn" value="mm">
                    <img style={{ width: 35, height: 14 }} src="/svg/mm.svg" alt="mmimage" />
                  </Radio.Button>
                </Radio.Group>
              </div>
            </Menu.Item>
          </Menu>
        </div>

        <div className="RightNavigator">
          <Link href="/login">
            <a href="#!" style={{ marginRight: 15 }}>
              {t('Login')}
            </a>
          </Link>
          <div
            className="ImgContainer"
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'mm' : 'en')}
          >
            {
							i18n.language === 'en' ? (<img src="/svg/mm.svg" alt="enimage" />) : (<img src="/svg/en.svg" alt="enimage" />)
						}
          </div>
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
						.RightNavigator {
							display: none;
						}
					}

					.RightNavigator {
						float: right;
					}

					.RightNavigator > .ImgContainer {
						width: 26px;
						height: 26px;
						position: relative;
						top: 10px;
						right: .3em;
						background: black;
						display: inline-block;
						border-radius: 1rem;
						overflow: hidden;
					}

					.RightNavigator > .ImgContainer > img {
						width: 100%;
						object-fit: cover;
						display: inline-block;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
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
  i18n: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default memo(connect((state) => state, { logout })(withTranslation('common')(GuestNavbar)))
