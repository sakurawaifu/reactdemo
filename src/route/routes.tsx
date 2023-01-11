import Lazy from '@/utils/Lazy'
import ArticleListLoader from '@/views/ArticleList/ArticleListLoader'
import { Navigate } from 'react-router-dom'
import { HandleRouteObject } from '@/types/HandleRouteObject'

const routes: HandleRouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'}></Navigate>,
    handle: {
      isMenuItem: false
    }
  },
  {
    path: '/home',
    element: Lazy('views', 'Home'),
    handle: {
      label: 'home'
    }
  },
  {
    path: '/article',
    element: Lazy('views', 'ArticleList'),
    loader: ArticleListLoader,
    handle: {
      label: '文章列表'
    }
  },
  {
    path: '/unicode',
    element: Lazy('views', 'Unicode'),
    handle: {
      label: 'Unicode'
    }
  },
  {
    path: '/experiment',
    element: Lazy('views', 'Experiment'),
    handle: {
      label: '试验田'
    }
  }
]

export default routes
