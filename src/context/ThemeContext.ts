import React from 'react'
import Mode from '../constant/data/theme/Mode'
import ThemeStore from '../store/ThemeStore'

export type Theme = {
  mode: Mode
}

const ThemeContext = React.createContext({
  theme: ThemeStore.get(),
  toggleMode: () => {
  }
})

export default ThemeContext
