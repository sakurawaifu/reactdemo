import styles from './Fireword.module.scss'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../ts_define/BasePropsType'

export type FireworkProps = BasePropsType & {}

const Firework = (props: FireworkProps) => {

  return (
    <div className={clsmix(styles.firework, props.className)}>

    </div>
  )
}
export default Firework
