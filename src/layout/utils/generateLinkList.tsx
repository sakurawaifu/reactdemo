import { HandleRouteObject } from '@/types/HandleRouteObject'
import { SidebarMenuItem } from '@/layout/components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const generateLinkList = (routes: HandleRouteObject[]): SidebarMenuItem[] => {
  // todo 目前只有一级菜单
  return routes.filter(v => v.handle?.isMenuItem).map(v => {
    const path = v.path as string
    const label = v.handle?.label
    return {
      key: path,
      label: <Link to={path}>{label}</Link>
    }
  })
}

export default generateLinkList
