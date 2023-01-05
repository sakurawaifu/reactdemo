import styles from './LoadingProgress.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'

export type LoadingProgressProps = CProps<{
  complete: boolean
}>

const LoadingProgress = (props: LoadingProgressProps) => {
  return (
    <div
      className={classnames(
        props.className,
        styles.loadingProgress,
        { [styles.complete]: props.complete }
      )}
    ></div>
  )
}

export default LoadingProgress
