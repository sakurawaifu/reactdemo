import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Lazy from '@/utils/Lazy'
import routes from '@/route/routes'

const router = createBrowserRouter([
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
])

export default router
