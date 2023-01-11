import styles from './Hot.module.scss'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { memo } from 'react'

export type HotProps = CProps<{}>

const Hot = memo((props: HotProps) => {
  console.log('hot')

  return (
    <div className={classnames(styles.hot, props.className)}></div>
  )
})

export default Hot
