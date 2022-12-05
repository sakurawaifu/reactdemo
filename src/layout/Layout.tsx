import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import useLinkList, { RouteObject } from './hook/useLinkList'

import './Layout.scss'

// todo
const routes: RouteObject[] = [
  {
    path: '/',
    label: 'home'
  },
  {
    path: '/temp',
    label: 'temp'
  }
]

export default function Layout() {
  const linkList = useLinkList(routes)

  return (
    <div className="layout">
      <Sidebar menuItems={linkList}></Sidebar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
