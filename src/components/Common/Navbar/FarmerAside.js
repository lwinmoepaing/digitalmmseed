/* eslint-disable react/prop-types */
import { Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
  StepForwardOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import { Link, withTranslation } from '../../../i18n'


const Hoooome = (props) => {
  const { router } = props

  const links = [
    { name: 'Dashboard', url: '/farmer', icon: StepForwardOutlined },
    { name: 'Projects', url: '/farmer/projects', icon: HomeOutlined },
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
      </Menu>
    </div>
  )
}

export default withTranslation('common')(Hoooome)
