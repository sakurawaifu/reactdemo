import { createContext } from 'react'
import Mode from '../constant/theme/Mode'
import ThemeStore from '../store/ThemeStore'

export type Theme = {
  mode: Mode
}

const ThemeContext = createContext({
  theme: ThemeStore.get(),
  toggleMode: () => {
  }
})

export default ThemeContext
