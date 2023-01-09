import { RouteObject } from 'react-router-dom'
import { Route } from '@/types/Route'

const normalizeSingle = (route: Route): RouteObject => {
  const result = { ...route }
  delete result.meta
  return result as RouteObject
}

const normalizeRoutes = (routes: Route[]): RouteObject[] =>
  routes.map(v => {
    const result = normalizeSingle(v)
    result.children && (result.children = normalizeRoutes(result.children))
    return result
  })

export default normalizeRoutes
