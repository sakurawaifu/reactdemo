import { Navigate, RouteObject } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Lazy from '@/utils/Lazy'
import ArticleListLoader from '@/views/ArticleList/ArticleListLoader'

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: Lazy('views/error', 'ErrorPage'),
    children: [
      {
        index: true,
        element: Lazy('views', 'Home')
      },
      {
        path: 'article',
        element: Lazy('views', 'ArticleList'),
        loader: ArticleListLoader
      },
      {
        path: 'experiment',
        element: Lazy('views', 'Experiment')
      },
      {
        path: 'temp',
        element: <Navigate to={'/article'}></Navigate>
      }
    ]
  },
  {
    path: '*',
    element: Lazy('views/error', 'NotFound')
  }
]

export default commonRoutes
