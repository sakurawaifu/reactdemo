import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import Mode from '../../constant/theme/Mode'

const useIsNightMode = () => {
  const { theme: { mode } } = useContext(ThemeContext)
  return mode === Mode.NIGHT
}

export default useIsNightMode
