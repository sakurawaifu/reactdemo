import { Theme } from '../context/ThemeContext'
import storage from '../utils/storage'
import defaultTheme from '../constant/theme/defaultTheme'

const STORAGE_KEY = 'theme'

const localTheme = storage.get(STORAGE_KEY)
let data: Theme = localTheme !== null ? localTheme : defaultTheme

const ThemeStore = {
  set(theme: Theme) {
    data = theme
    storage.set(STORAGE_KEY, theme)
  },
  get() {
    return data
  },
  mutate(option: Partial<Theme>) {
    Object.assign(data, option)
    storage.set(STORAGE_KEY, data)
  }
}

export default ThemeStore
