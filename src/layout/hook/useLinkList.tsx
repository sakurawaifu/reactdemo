import { Link } from 'react-router-dom'
import { ItemType } from '../../components/Sidebar/Sidebar'

export type RouteObject = {
  path: string
  label: any
}

export default function useLinkList(routes: RouteObject[]): ItemType[] {
  return routes.map(
    ({ path, label }) => ({
      key: path,
      label: <Link to={path}>{label}</Link>
    }))
}
