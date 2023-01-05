import { lazy, ReactNode, Suspense } from 'react'

/**
 * 组件懒加载
 * 组件tsx文件所在的目录和文件名，均以组件名命名
 * @param path 组件目录以src为根的无 / 前缀的路径
 * @param name 组件名
 * @param fallback 加载期间显示的内容
 */
const Lazy = (path: string, name: string, fallback: ReactNode = <div>loading...</div>) => {
  const Component = lazy(() => import(`@/${path}/${name}/${name}`))

  return (
    <Suspense fallback={fallback}>
      <Component></Component>
    </Suspense>
  )
}

export default Lazy
