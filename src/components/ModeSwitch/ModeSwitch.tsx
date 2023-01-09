import styles from './ModeSwitch.module.scss'
import Mode from '../../constant/theme/Mode'
import classnames from '../../utils/classnames'
import SunIcon from '../../assets/icon/sun.svg'
import NightIcon from '../../assets/icon/night.svg'
import { CProps } from '@/types/CProps'

export type ModeSwitchProps = CProps<{
  mode: Mode
  onModeChange: () => void
}>

const ModeSwitch = (props: ModeSwitchProps) => {
  const icon = props.mode === Mode.DAY ? <SunIcon></SunIcon> : <NightIcon></NightIcon>

  return (
    <div
      className={classnames(
        props.className,
        styles.modeSwitch,
        { [styles.checked]: props.mode === Mode.NIGHT }
      )}
      onClick={props.onModeChange}
    >
      <div className={styles.handle}>
        {icon}
      </div>
    </div>
  )
}

export default ModeSwitch
