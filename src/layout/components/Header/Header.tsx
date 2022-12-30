import styles from './Header.module.scss'
import ModeSwitch from '../../../components/ModeSwitch/ModeSwitch'
import classnames from '../../../utils/classnames'
import Account from '../../../components/Account/Account'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'
import { CProps } from '../../../types/CProps'
import { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'

export type HeaderProps = CProps<{}>

const Header = (props: HeaderProps) => {
  const isNightMode = useIsNightMode()
  const { theme, toggleMode } = useContext(ThemeContext)

  return (
    <header
      className={classnames(
        props.className,
        styles.header,
        { [styles.nightMode]: isNightMode }
      )}
    >
      <ModeSwitch mode={theme.mode} onModeChange={toggleMode}></ModeSwitch>
      <Account></Account>
    </header>
  )
}
export default Header
