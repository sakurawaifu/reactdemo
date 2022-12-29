import styles from './Layout.module.scss'
import Sidebar from './components/Sidebar/Sidebar'
import useLinkList, { RouteObject } from './hook/useLinkList'
import BasePropsType from '../constant/type/BasePropsType'
import clsmix from '../utils/clsmix'
import ThemeContext from '../context/ThemeContext'
import Header from './components/Header/Header'
import useTheme from './hook/useTheme'
import Mode from '../constant/data/theme/Mode'
import classname from '../utils/classname'
import Main from './components/Main/Main'
import { useNavigation } from 'react-router-dom'
import LoadingProgress from './components/LoadingProgress/LoadingProgress'

export type LayoutProps = BasePropsType & {}

// todo
const routes: RouteObject[] = [
  {
    path: '/',
    label: 'home'
  },
  {
    path: '/article',
    label: 'article'
  },
  {
    path: '/experiment',
    label: 'experiment'
  }
]

const Layout = (props: LayoutProps) => {
  console.log('layout')
  const state = useNavigation()
  console.log(state)

  const linkList = useLinkList(routes)

  const [
    theme,
    { toggleMode }
  ] = useTheme()

  const isNightMode = theme.mode === Mode.NIGHT

  // 存在 顶层state，故后代组件有必要时应使用memo
  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      <div
        className={clsmix(classname({
          [styles.layout]: true,
          [styles.nightMode]: isNightMode
        }), props.className)}
      >
        <Sidebar className={styles.sidebar} menuItems={linkList}></Sidebar>
        <Header className={styles.header}></Header>
        <Main className={styles.main}></Main>

        <LoadingProgress complete={state.state === 'idle'}></LoadingProgress>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
