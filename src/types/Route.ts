import { RouteObject } from 'react-router-dom'

export type Route = Omit<RouteObject, 'children'> & {
  children?: Route[],
  meta?: {
    label?: string
  }
}
