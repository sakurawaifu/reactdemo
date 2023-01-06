import { useEffect } from 'react'

const useUnmount = (fn: () => void) => {
  // eslint-disable-next-line
  useEffect(() => fn, [])
}

export default useUnmount
