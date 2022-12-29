import styles from './LoadingProgress.module.scss'
import clsmix from '../../../utils/clsmix'
import BasePropsType from '../../../constant/type/BasePropsType'
import classname from '../../../utils/classname'

export type LoadingProgressProps = BasePropsType & {
  complete: boolean
}

const LoadingProgress = (props: LoadingProgressProps) => {
  return (
    <div
      className={clsmix(classname({
        [styles.loadingProgress]: true,
        [styles.complete]: props.complete
      }), props.className)}
    ></div>
  )
}

export default LoadingProgress
