import styles from './ModeSwitch.module.scss'
import Mode from '../../constant/theme/Mode'
import classnames from '../../utils/classnames'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import SunIcon from '../../assets/icon/sun.svg'
import NightIcon from '../../assets/icon/night.svg'
import { CProps } from '../../types/CProps'

export type ModeSwitchProps = CProps<{}>

// todo 将 theme 变为 prop
const ModeSwitch = (props: ModeSwitchProps) => {
  const { theme, toggleMode } = useContext(ThemeContext)

  const icon = theme.mode === Mode.DAY ? <SunIcon></SunIcon> : <NightIcon></NightIcon>

  return (
    <div
      className={classnames(
        props.className,
        styles.modeSwitch,
        { [styles.checked]: theme.mode === Mode.NIGHT }
      )}
      onClick={() => toggleMode()}
    >
      <div className={styles.handle}>
        {icon}
      </div>
    </div>
  )
}

export default ModeSwitch
