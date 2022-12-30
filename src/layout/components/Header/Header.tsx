import styles from './Header.module.scss'
import ModeSwitch from '../../../components/ModeSwitch/ModeSwitch'
import classnames from '../../../utils/classnames'
import Account from '../../../components/Account/Account'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'
import { CProps } from '../../../types/CProps'

export type HeaderProps = CProps<{}>

const Header = (props: HeaderProps) => {
  const isNightMode = useIsNightMode()

  return (
    <header
      className={classnames(
        props.className,
        styles.header,
        { [styles.nightMode]: isNightMode }
      )}
    >
      <ModeSwitch></ModeSwitch>
      <Account></Account>
    </header>
  )
}
export default Header
