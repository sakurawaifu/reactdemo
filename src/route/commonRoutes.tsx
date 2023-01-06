import { RouteObject } from 'react-router-dom'
import Layout from '@/layout/Layout'
import ExperimentLoader from '@/views/Experiment/ExperimentLoader'
import Lazy from '@/utils/Lazy'

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
        element: Lazy('views', 'ArticleList')
      },
      {
        path: 'experiment',
        element: Lazy('views', 'Experiment'),
        loader: ExperimentLoader
      }
    ]
  }
]

export default commonRoutes
