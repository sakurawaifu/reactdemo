import { lazy, ReactNode, Suspense } from 'react'

const Lazy = (path: string = '@/views/Home/Home', fallback: ReactNode = <div>loading...</div>) => {
  const Component = lazy(() => import(path))

  return (
    <Suspense fallback={fallback}>
      <Component></Component>
    </Suspense>
  )
}

export default Lazy
