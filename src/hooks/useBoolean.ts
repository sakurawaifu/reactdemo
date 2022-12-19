import { useState } from 'react'

const useBoolean = (init: boolean = false) => {
  const [bool, setBool] = useState(init)

  const setTrue = () => setBool(true)
  const setFalse = () => setBool(false)
  const toggle = () => setBool(b => !b)

  return [
    bool,
    {
      setTrue,
      setFalse,
      toggle
    }
  ] as const
}

export default useBoolean
