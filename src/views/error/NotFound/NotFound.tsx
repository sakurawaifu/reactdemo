import styles from './NotFound.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'

export type NotFoundProps = CProps<{}>

const NotFound = (props: NotFoundProps) => {
  return (
    <div className={classnames(styles.notFound, props.className)}>
        404
    </div>
  )
}

export default NotFound
