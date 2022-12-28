import styles from './Header.module.scss'
import clsmix from '../../../utils/clsmix'
import BasePropsType from '../../../constant/type/BasePropsType'
import ModeSwitch from '../../../components/ModeSwitch/ModeSwitch'
import classname from '../../../utils/classname'
import Account from '../../../components/Account/Account'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'

export type HeaderProps = BasePropsType & {}

const Header = (props: HeaderProps) => {
  const isNightMode = useIsNightMode()

  return (
    <header
      className={clsmix(classname({
        [styles.header]: true,
        [styles.nightMode]: isNightMode
      }), props.className)}
    >
      <ModeSwitch></ModeSwitch>
      <Account></Account>
    </header>
  )
}
export default Header
