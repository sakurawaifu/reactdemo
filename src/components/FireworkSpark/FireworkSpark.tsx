import styles from './FireworkSpark.module.scss'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../ts_define/BasePropsType'

export type FireworkSpark = BasePropsType & {}

const FireworkSpark = () => {

  return (
    <div className={clsmix(styles.fireworkSpark)}>spark</div>
  )
}
