import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'
import classnames from '../../../utils/classnames'
import { CProps } from '../../../types/CProps'

export type ItemType = Omit<MenuProps['items'], 'key'> & { key: string }

type SidebarProps = CProps<{
  menuItems: ItemType[]
}>

const Sidebar = React.memo((props: SidebarProps) => {
  const isNightMode = useIsNightMode()

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  return (
    <nav className={classnames(styles.sidebar, props.className)}>
      <Menu
        className={styles.navList}
        theme={isNightMode ? 'dark' : 'light'}
        items={props.menuItems}
        selectedKeys={selectedKeys}
      ></Menu>
    </nav>
  )
})

export default Sidebar
