import { useEffect } from 'react'

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn()
    // eslint-disable-next-line
  }, [])
}
export default useMount
