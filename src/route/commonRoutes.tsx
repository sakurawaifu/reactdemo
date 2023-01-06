import { Navigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Lazy from '@/utils/Lazy'
import ArticleListLoader from '@/views/ArticleList/ArticleListLoader'
import { Route } from '@/types/Route'

const commonRoutes: Route[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: Lazy('views/error', 'ErrorPage'),
    children: [
      {
        index: true,
        element: Lazy('views', 'Home'),
        meta: {
          label: 'home'
        }
      },
      {
        path: 'article',
        element: Lazy('views', 'ArticleList'),
        loader: ArticleListLoader,
        meta: {
          label: '文章列表'
        }
      },
      {
        path: 'experiment',
        element: Lazy('views', 'Experiment'),
        meta: {
          label: '试验田'
        }
      },
      {
        path: 'temp',
        element: <Navigate to={'/article'}></Navigate>,
        meta: {
          label: '临时'
        }
      }
    ]
  },
  {
    path: '*',
    element: Lazy('views/error', 'NotFound')
  }
]

export default commonRoutes
