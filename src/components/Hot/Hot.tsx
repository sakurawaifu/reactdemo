import styles from './Hot.module.scss'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'

export type HotProps = CProps<{}>

const Hot = (props: HotProps) => {
  return (
    <div className={classnames(styles.hot, props.className)}></div>
  )
}

export default Hot
