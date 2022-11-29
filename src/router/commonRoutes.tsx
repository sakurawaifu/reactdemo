import Index from '../views/Index'
import { RouteObject } from 'react-router-dom'

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Index></Index>
  }
]

export default commonRoutes
