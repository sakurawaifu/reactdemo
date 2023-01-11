import styles from './Unicode.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'

export type UnicodeProps = CProps<{}>

const Unicode = (props: UnicodeProps) => {
  return (
    <div className={classnames(styles.unicode, props.className)}></div>
  )
}

export default Unicode
