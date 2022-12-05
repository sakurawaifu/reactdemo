import { useEffect, useState } from 'react'
import './Sidebar.scss'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'

export type ItemType = Omit<MenuProps['items'], 'key'> & { key: string }

type SidebarProps = {
  menuItems: ItemType[]
}

export default function Sidebar(props: SidebarProps) {
  const { menuItems } = props

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  return (
    <nav className="sidebar">
      <Menu
        className="nav-list"
        theme="dark"
        items={menuItems}
        selectedKeys={selectedKeys}
      ></Menu>
    </nav>
  )
}
