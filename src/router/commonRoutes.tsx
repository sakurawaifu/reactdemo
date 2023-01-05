import { RouteObject } from 'react-router-dom'
import Layout from '../layout/Layout'
import ErrorPage from '../views/error/ErrorPage/ErrorPage'
import ExperimentLoader from '../views/Experiment/ExperimentLoader'
import Lazy from './Lazy/Lazy'

const LazyView = (name: string) => Lazy('views', name)

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: LazyView('Home')
      },
      {
        path: '/article',
        element: LazyView('ArticleList')
      },
      {
        path: '/experiment',
        element: LazyView('Experiment'),
        loader: ExperimentLoader
      }
    ]
  }
]

export default commonRoutes
