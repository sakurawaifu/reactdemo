import { useState } from 'react'
import { Theme } from '@/context/ThemeContext'
import ThemeStore from '@/store/ThemeStore'
import Mode from '@/constant/theme/Mode'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(ThemeStore.get())

  const set = (theme: Theme) => {
    setTheme(theme)
    ThemeStore.set(theme)
  }
  const mutate = (option: Partial<Theme>) => {
    setTheme(prevTheme => {
      const newTheme = { ...prevTheme, ...option }
      ThemeStore.set(newTheme)
      return newTheme
    })
  }
  const toggleMode = () => {
    setTheme(prevTheme => {
      const newTheme = { ...prevTheme }
      newTheme.mode = newTheme.mode === Mode.DAY ? Mode.NIGHT : Mode.DAY
      ThemeStore.set(newTheme)
      return newTheme
    })
  }

  return [
    theme,
    {
      set,
      mutate,
      toggleMode
    }
  ] as const
}

export default useTheme
