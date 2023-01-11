import Layout from '@/layout/Layout'
import Lazy from '@/utils/Lazy'
import routes from '@/route/routes'
import { RouteObject } from 'react-router-dom'

const rootRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: Lazy('views/error', 'ErrorPage'),
    children: routes as RouteObject[]
  },
  {
    path: '*',
    element: Lazy('views/error', 'NotFound')
  }
]

export default rootRoutes
