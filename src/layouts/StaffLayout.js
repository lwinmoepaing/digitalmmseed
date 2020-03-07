import Head from 'next/head'
import { withRouter } from 'next/router'
import { useState, useEffect, memo } from 'react'

import {
  MenuFoldOutlined,
  RightOutlined,
} from '@ant-design/icons'

import { Layout } from 'antd'

import PropTypes from 'prop-types'

import StaffAside from '../components/Common/Navbar/StaffAside'
import SelectLanguage from '../components/Common/SelectLanguage/SelectLanguage'

const StaffLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { children, i18n, router } = props
  const { Header, Sider, Content } = Layout

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      if (width < 600 && collapsed === false) {
        setCollapsed(true)
      } else if (width > 600 && collapsed === true) {
        setCollapsed(false)
      }
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 600 && collapsed === false) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
  }, [])

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const setLang = (val) => i18n.changeLanguage(val)

  return (
    <Layout>
      <Head>
        <title> Staff Dashboard </title>
      </Head>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3 className="LogoText">
            {
							collapsed ? 'DMF' : 'Digital MM Farm'
						}
          </h3>
        </div>
        <StaffAside router={router} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 14, paddingRight: 80 }}>
          {collapsed
            ? <RightOutlined className="trigger" onClick={toggle} />
            : <MenuFoldOutlined className="trigger" onClick={toggle} />}
          <SelectLanguage setLang={setLang} i18n={i18n} />
        </Header>
        <Content
          className="site-layout-background"
        >
          <div className={`ContainerWrapper ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
            { children }
          </div>

        </Content>
      </Layout>
      <style jsx>
        {`
					.trigger {
						font-size: 18px;
						line-height: 64px;
						padding: 0 24px;
						cursor: pointer;
						transition: color 0.3s;
					}

					.trigger:hover {
						color: #1890ff;
					}

					.logo {
						height: 40px;
						background: rgba(255, 255, 255, 0.2);
						border-right: 1px solid #f0f2f5;
					}

					.site-layout .site-layout-background {
						background: #fff;
            margin: '24px 16px';
            padding: 24;
            min-height: 280px;
					}

					.LogoText {
						font-size: 1em;
						padding: 0;
						margin: 0;
						height: 40px;
						line-height: 40px;
						text-align: center;
						font-weight: 500;
						color: rgb(82, 196, 26);
					}

					.ContainerWrapper {
						min-height: 100vh;
						padding: 1rem;
						max-width: 1300px;
						margin: 0 auto;
					}

					.CreateNewProject {
						display: inline-block;
    				float: right;
					}

					.CreateNewProject > button {
						height: 33px;
						line-height: 20px;
						border: 1px solid #97c41a;
						border-radius: 1rem;
						padding: 0 2rem;
						cursor: pointer;
						background: #f6ffed;
						font-weight: bold;
						color: #97c41a;
					}

					.CreateNewProject > button:hover {
						opacity: 0.5;
					}
				`}
      </style>
    </Layout>
  )
}

StaffLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  router: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  i18n: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default memo(withRouter(StaffLayout))
