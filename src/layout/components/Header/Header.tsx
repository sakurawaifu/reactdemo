import { memo, useContext } from 'react'
import styles from './Header.module.scss'
import { CProps } from '@/types/CProps'
import Account from '@/components/Account/Account'
import ModeSwitch from '@/components/ModeSwitch/ModeSwitch'
import classnames from '@/utils/classnames'
import ThemeContext from '@/context/ThemeContext'
import useIsNightMode from '@/hooks/theme/useIsNightMode'

export type HeaderProps = CProps<{}>

const Header = memo((props: HeaderProps) => {
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
})

export default Header
