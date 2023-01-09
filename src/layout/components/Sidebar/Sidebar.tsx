import { memo, useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import useIsNightMode from '@/hooks/theme/useIsNightMode'
import classnames from '@/utils/classnames'
import type { CProps } from '@/types/CProps'
import { MenuDividerType } from 'antd/es/menu/hooks/useItems'

type MenuPropsItem = Exclude<MenuProps['items'], undefined>[number]
type LabelMenuItem = Exclude<MenuPropsItem, null | MenuDividerType>
export type SidebarMenuItem = Omit<LabelMenuItem, 'key'> & { key: string }

export type SidebarProps = CProps<{
  menuItems: SidebarMenuItem[]
}>

const Sidebar = memo((props: SidebarProps) => {
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
