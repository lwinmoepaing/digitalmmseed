/* eslint-disable react/prop-types */
import { Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
  ProjectOutlined,
  CopyOutlined,
  SettingFilled,
  DashboardOutlined,
  LogoutOutlined,
  UsergroupAddOutlined,
  FlagOutlined,
  QuestionCircleOutlined,
  AlignLeftOutlined,
  SmileOutlined,
  FolderAddOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'

import { Link, withTranslation } from '../../../i18n'
import { logout } from '../../../../store/actions/authAction'

const FarmerAside = (props) => {
  const { router, logout: onLogout } = props

  const links = [
    { name: 'Dashboard', url: '/admin', icon: DashboardOutlined },
    { name: 'Farmer Projects', url: '/admin/farmer-projects', icon: CopyOutlined },
    { name: 'User Projects', url: '/admin/user-projects', icon: ProjectOutlined },
    { name: 'User', url: '/admin/users', icon: UsergroupAddOutlined },
    { name: 'Blog List', url: '/admin/blog', icon: AlignLeftOutlined },
    { name: 'My Blog', url: '/admin/blog/me', icon: SmileOutlined },
    { name: 'Create Blog', url: '/admin/blog/create', icon: FolderAddOutlined },
    { name: 'Map', url: '/admin/map', icon: FlagOutlined },
    { name: 'About', url: '/admin/about', icon: QuestionCircleOutlined },
    { name: 'Profile', url: '/admin/profile', icon: SettingFilled },
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
