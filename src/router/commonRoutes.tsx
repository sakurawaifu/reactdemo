import { RouteObject } from 'react-router-dom'

import Home from '../views/Home/Home'
import ErrorPage from '../views/error/ErrorPage/ErrorPage'
import ArticleList from '../views/ArticleList/ArticleList'
import Layout from '../layout/Layout'

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
      }
    ]
  }
]

export default commonRoutes
