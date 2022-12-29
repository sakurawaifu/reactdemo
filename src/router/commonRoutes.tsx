import { RouteObject } from 'react-router-dom'

import Layout from '../layout/Layout'
import ErrorPage from '../views/error/ErrorPage/ErrorPage'
import Home from '../views/Home/Home'
import ArticleList from '../views/ArticleList/ArticleList'
import Experiment from '../views/Experiment/Experiment'
import ExperimentLoader from '../views/Experiment/ExperimentLoader'

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/article',
        element: <ArticleList></ArticleList>
      },
      {
        path: '/experiment',
        element: <Experiment></Experiment>,
        loader: ExperimentLoader
      }
    ]
  }
]

export default commonRoutes
