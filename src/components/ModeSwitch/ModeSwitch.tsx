import styles from './ModeSwitch.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import Mode from '../../constant/data/theme/Mode'
import clsmix from '../../utils/clsmix'
import classname from '../../utils/classname'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import SunIcon from '../../assets/icon/sun.svg'
import NightIcon from '../../assets/icon/night.svg'

export type ModeSwitchProps = BasePropsType & {}

const ModeSwitch = (props: ModeSwitchProps) => {
  const { theme, toggleMode } = useContext(ThemeContext)

  const localCls = classname({
    [styles.modeSwitch]: true,
    [styles.checked]: theme.mode === Mode.NIGHT // night为选中态
  })

  const icon = theme.mode === Mode.DAY ? <SunIcon></SunIcon> : <NightIcon></NightIcon>

  return (
    <div
      className={clsmix(localCls, props.className)}
      onClick={() => toggleMode()}
    >
      <div className={styles.handle}>
        {icon}
      </div>
    </div>
  )
}

export default ModeSwitch
