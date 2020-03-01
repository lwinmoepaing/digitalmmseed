/* eslint-disable react/prop-types */
import { Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
  ProjectOutlined,
  CopyOutlined,
  SettingFilled,
  DashboardOutlined,
  LogoutOutlined,
  FlagOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'

import { Link, withTranslation } from '../../../i18n'
import { logout } from '../../../../store/actions/authAction'

const FarmerAside = (props) => {
  const { router, logout: onLogout } = props

  const links = [
    { name: 'Dashboard', url: '/farmer', icon: DashboardOutlined },
    { name: 'My Projects', url: '/farmer/projects', icon: ProjectOutlined },
    { name: 'User Projects', url: '/farmer/user-projects', icon: CopyOutlined },
    { name: 'Map', url: '/farmer/map', icon: FlagOutlined },
    { name: 'About', url: '/farmer/about', icon: QuestionCircleOutlined },
    { name: 'Profile', url: '/farmer/profile', icon: SettingFilled },
  ]

  const [state, setstate] = useState(router.pathname)

  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  return (
    <div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={[state]}>
        {links.map((link) => (
          <Menu.Item key={link.url}>
            <Link href={link.url}>
              <a href="#!">
                <link.icon />
                <span>{link.name}</span>
              </a>
            </Link>
          </Menu.Item>
        ))}

        <Menu.Item
          theme="danger"
          onClick={async () => {
            await onLogout()
            router.push('/')
          }}
        >
          <LogoutOutlined style={{ color: 'red' }} />
          <span style={{ color: 'red' }}> Logout </span>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default connect((state) => state, { logout })(withTranslation('common')(FarmerAside))
