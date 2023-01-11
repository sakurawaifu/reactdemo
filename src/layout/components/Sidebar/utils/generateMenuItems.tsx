import { HandleRouteObject } from '@/types/HandleRouteObject'
import { MenuProps } from 'antd'
import { MenuDividerType } from 'antd/es/menu/hooks/useItems'

type MenuPropsItem = Exclude<MenuProps['items'], undefined>[number]
type LabelMenuItem = Exclude<MenuPropsItem, null | MenuDividerType>
export type SidebarMenuItem = Omit<LabelMenuItem, 'key'> & { key: string }

const generateMenuItems = (routes: HandleRouteObject[]): SidebarMenuItem[] => {
  // todo 目前只有一级菜单
  return routes.filter(({ handle }) => !(handle?.isMenuItem === false)).map(v => {
    const path = v.path as string
    const label = v.handle?.label
    return {
      key: path,
      label
    }
  })
}

export default generateMenuItems
