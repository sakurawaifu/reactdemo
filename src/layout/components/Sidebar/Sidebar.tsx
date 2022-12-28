import React, { useContext, useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import clsmix from '../../../utils/clsmix'
import BasePropsType from '../../../constant/type/BasePropsType'
import ThemeContext from '../../../context/ThemeContext'
import Mode from '../../../constant/data/theme/Mode'

export type ItemType = Omit<MenuProps['items'], 'key'> & { key: string }

type SidebarProps = BasePropsType & {
  menuItems: ItemType[]
}

const Sidebar = React.memo((props: SidebarProps) => {
  const { theme } = useContext(ThemeContext)
  const menuTheme = theme.mode === Mode.NIGHT ? 'dark' : 'light'

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  return (
    <nav className={clsmix(styles.sidebar, props.className)}>
      <Menu
        className={clsmix(styles.navList)}
        theme={menuTheme}
        items={props.menuItems}
        selectedKeys={selectedKeys}
      ></Menu>
    </nav>
  )
})

export default Sidebar
