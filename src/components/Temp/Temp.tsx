import styles from './Temp.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import clsmix from '../../utils/clsmix'
import React from 'react'

export type TempProps = BasePropsType & {}

const Temp = React.memo((props: TempProps) => {
  return (
    <div className={clsmix(styles.tempComp, props.className)}>
      temp
    </div>
  )
})

export default Temp
