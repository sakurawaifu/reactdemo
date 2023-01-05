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
        element: Lazy('views', 'Home')
      },
      {
        path: '/article',
        element: Lazy('views', 'ArticleList')
      },
      {
        path: '/experiment',
        element: Lazy('views', 'Experiment'),
        loader: ExperimentLoader
      }
    ]
  }
]

export default commonRoutes
