import { memo } from 'react'
import styles from './Sidebar.module.scss'
import { Menu } from 'antd'
import useIsNightMode from '@/hooks/theme/useIsNightMode'
import classnames from '@/utils/classnames'
import type { CProps } from '@/types/CProps'
import generateMenuItems, { SidebarMenuItem } from '@/layout/components/Sidebar/utils/generateMenuItems'
import routes from '@/route/routes'
import useSelectedKeys from '@/layout/components/Sidebar/hooks/useSelectedKeys'

const menuItems: SidebarMenuItem[] = generateMenuItems(routes)

export type SidebarProps = CProps<{}>

const Sidebar = memo((props: SidebarProps) => {
  const isNightMode = useIsNightMode()
  const [selectedKeys, handleClickMenuItem] = useSelectedKeys()

  return (
    <nav className={classnames(styles.sidebar, props.className)}>
      <Menu
        className={styles.navList}
        theme={isNightMode ? 'dark' : 'light'}
        items={menuItems}
        selectedKeys={selectedKeys}
        onClick={handleClickMenuItem}
      ></Menu>
    </nav>
  )
})

export default Sidebar
