import { useState } from 'react'

const useCount = (init: number = 0, delta: number = 1) => {
  const [count, setCount] = useState(init)
  const increment = () => setCount(c => c + delta)
  const decrement = () => setCount(c => c - delta)

  return [
    count,
    {
      setCount,
      increment,
      decrement
    }
  ] as const
}


export default useCount
