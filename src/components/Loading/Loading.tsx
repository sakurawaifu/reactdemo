import styles from './Loading.module.scss'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { LoadingOutlined } from '@ant-design/icons'

export type LoadingProps = CProps<{}>

const Loading = (props: LoadingProps) => {
  return (
    <div className={classnames(styles.loading, props.className)}>
        <LoadingOutlined></LoadingOutlined>
    </div>
  )
}

export default Loading
