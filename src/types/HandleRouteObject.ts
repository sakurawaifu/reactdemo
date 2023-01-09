import { RouteObject } from 'react-router-dom'
import { ReactNode } from 'react'

export type Handle = {
  // 菜单项标签
  label?: ReactNode

  // 是否为菜单项路由，默认为true
  isMenuItem?: boolean
}

export type HandleRouteObject = Omit<RouteObject, 'handle' | 'children'> & {
  children?: HandleRouteObject[]
  handle?: Handle
}
