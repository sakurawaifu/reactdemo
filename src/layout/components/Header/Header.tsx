import styles from './Header.module.scss'
import clsmix from '../../../utils/clsmix'
import BasePropsType from '../../../constant/type/BasePropsType'
import ModeSwitch from '../../../components/ModeSwitch/ModeSwitch'
import { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import Mode from '../../../constant/data/theme/Mode'
import classname from '../../../utils/classname'

export type HeaderProps = BasePropsType & {}

const Header = (props: HeaderProps) => {
  const { theme } = useContext(ThemeContext)
  const isNightMode = theme.mode === Mode.NIGHT

  return (
    <header
      className={clsmix(classname({
        [styles.header]: true,
        [styles.nightMode]: isNightMode
      }), props.className)}
    >
      <ModeSwitch></ModeSwitch>
      {/*todo 头像*/}
    </header>
  )
}
export default Header
