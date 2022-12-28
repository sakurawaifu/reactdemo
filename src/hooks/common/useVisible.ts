import { useState } from 'react'

const useVisible = (init: boolean = false) => {
  const [visible, setVisible] = useState(init)
  const hide = () => setVisible(false)
  const show = () => setVisible(true)
  const toggle = () => setVisible(v => !v)

  return [
    visible,
    {
      show,
      hide,
      toggle
    }
  ] as const
}
export default useVisible
