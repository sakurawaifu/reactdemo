import { RouteObject } from 'react-router-dom'
import Layout from '../layout/Layout'
import ErrorPage from '../views/error/ErrorPage/ErrorPage'
import ExperimentLoader from '../views/Experiment/ExperimentLoader'
import Lazy from './Lazy/Lazy'

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: Lazy('@/views/Home/Home')
      },
      {
        path: '/article',
        element: Lazy('/src/views/ArticleList/ArticleList')
      },
      {
        path: '/experiment',
        element: Lazy('/src/views/Experiment/Experiment'),
        loader: ExperimentLoader
      }
    ]
  }
]

export default commonRoutes
