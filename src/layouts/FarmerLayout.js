import Head from 'next/head'
import { withRouter } from 'next/router'
import React, { useState } from 'react'

import {
  MenuFoldOutlined,
  RightOutlined,
} from '@ant-design/icons'

import { Layout } from 'antd'

import PropTypes from 'prop-types'

import FarmerAside from '../components/Common/Navbar/FarmerAside'

const FarmerLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { children, i18n, router } = props
  const { Header, Sider, Content } = Layout
  const Console = console
  Console.log(i18n.languages)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Head>
        <title> Farmer Dashboard </title>
      </Head>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <FarmerAside router={router} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 14 }}>
          {collapsed
            ? <RightOutlined className="trigger" onClick={toggle} />
            : <MenuFoldOutlined className="trigger" onClick={toggle} />}
        </Header>
        <Content
          className="site-layout-background"
        >
          { children }
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
				`}
      </style>
    </Layout>
  )
}

FarmerLayout.propTypes = {
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

export default withRouter(FarmerLayout)
